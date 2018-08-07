import constant from "lodash/constant";
import isString from "lodash/isString";
import isFunction from "lodash/isFunction";
import md5 from "md5";
import { isValidElement, cloneElement, createElement, Children } from "react";
import {
  compose,
  getDisplayName,
  withStateHandlers,
  withProps,
  lifecycle
} from "recompose";
import { connect } from "react-redux";

import { RUN } from "actions";
import Promise from "helpers/promise";
import ensure from "helpers/array/ensure";
import replace from "helpers/object/replace";
import starts from "helpers/string/starts";
import setStatics from "helpers/rendering/statics/set";
import omitProps from "behaviors/omit-props";
import { register, deregister } from "mutations";

import * as statics from "./statics";
import initialState from "./initial-state";
import * as reducers from "./reducers";
import selectors from "./selectors";
import events from "./events";

export const dig = (stack, [_, activity]) =>
  stack.concat(Object.entries(activity));

export const wrap = promise =>
  new Promise((resolve, reject) => promise.then(resolve).catch(reject));

export const execute = (...params) => callback => callback(...params);

export const getType = method => `${RUN}: ${method}`;

export const printArgs = params => params.map(JSON.stringify).join(", ");

export const isThenable = object =>
  object instanceof window.Promise || object instanceof Promise;

export const bindTo = props => (path, method) => {
  const { children, connect, disconnect, log, dismiss, dispatch } = props;
  const namespace = [getDisplayName(children) || md5(method), ...path].join(
    "."
  );
  const wrapped = (...params) => {
    const response = method(...params);
    const type = getType(`${namespace}(${printArgs(params)});`);
    const start = new Date();
    const timestamp = start.getTime();
    const success = ({ mutation = [], output, error }) => {
      log({
        fingerprint: namespace,
        details: {
          dismiss: dismiss.bind(this, { fingerprint: namespace, timestamp }),
          finish: new Date(),
          loading: false,
          ...(!!output && { output }),
          ...(!!error && { error })
        },
        timestamp
      });

      dispatch({
        mutation: ensure(mutation).map(execute(props)),
        type
      });
    };
    const receive = promise => (...resolved) => {
      disconnect(promise);

      return success(...resolved);
    };
    const async = () => {
      const promise = wrap(response);

      connect(promise);

      return promise.then(receive(promise)).catch(receive(promise));
    };

    log({
      details: {
        loading: true,
        params,
        path,
        start
      },
      fingerprint: namespace,
      timestamp
    });

    return !isThenable(response) ? success(response) : async();
  };

  return Object.assign(wrapped, { fingerprint: namespace });
};

export const listenTo = listenable => settings => {
  const listeners = ensure(settings);
  const extract = props => (
    stack,
    { prop, method = {}, params = constant([]), format }
  ) => {
    const { fingerprint } = method;
    const $params = isFunction(params) ? params(props) : params;
    const $$params = !Array.isArray($params) ? [$params] : $params;

    const find = (stack, [timestamp, details]) => {
      const namespace = details.path.join(".");
      const criteria = [
        ...(isString(method) ? [!starts(namespace).with(method)] : []),
        ...(!!$$params.length ? [!starts(details.params).with($$params)] : [])
      ];
      const match = !criteria.length || !criteria.filter(Boolean).length;

      return !match ? stack : stack.concat({ ...details, timestamp });
    };
    const flatten = object => Object.entries(object).reduce(dig, []);
    const getChannel = () =>
      !!fingerprint
        ? Object.entries(listenable[fingerprint] || {})
        : flatten(listenable).sort();
    const events = getChannel().reduce(find, []);
    const broadcast = format ? format(events) : events;
    const value = broadcast || {};

    return Object.assign(
      stack,
      isFunction(prop) ? prop(value) : { [prop]: value }
    );
  };
  const getListenersFrom = props => listeners.reduce(extract(props), {});

  return {
    in: component =>
      isValidElement(component)
        ? cloneElement(component, getListenersFrom())
        : props =>
            createElement(component, { ...props, ...getListenersFrom(props) })
  };
};

export const connectToDB = props => {
  const { children, history } = props;
  const { DB = Object.create } = children;
  const namespace = getDisplayName(children);
  const listen = listenTo(history);
  const Listen = ({ children, to, as, ...settings }) =>
    Children.map(children, child =>
      listen({
        prop: as,
        method: to,
        ...settings
      }).in(child)
    );

  return {
    ...replace({
      ...DB(props),
      register: () => ({ mutation: register(namespace) }),
      deregister: () => ({ mutation: deregister(namespace) })
    }).with(bindTo(props)),
    Listen,
    listen
  };
};

export default compose(
  connect(selectors),
  withStateHandlers(initialState, reducers),
  withProps(connectToDB),
  lifecycle(events),
  omitProps([
    "dispatch",
    "register",
    "deregister",
    "history",
    "log",
    "dismiss",
    "network",
    "connect",
    "disconnect"
  ]),
  setStatics(statics)
);
