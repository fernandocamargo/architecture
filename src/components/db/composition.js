import noop from "lodash/noop";
import constant from "lodash/constant";
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

export const reserved = [
  "dispatch",
  "register",
  "deregister",
  "history",
  "log",
  "dismiss",
  "network",
  "connect",
  "disconnect"
];

export const cancel = promise => promise.cancel();

export const shutdown = (_, promise) => cancel(promise);

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

export const search = subset => ({
  in: set => !!~String(set).indexOf(String(subset))
});

export const listenTo = listenable => settings => {
  const listeners = ensure(settings);
  const extract = props => (
    stack,
    { prop, method = {}, params = constant(""), format }
  ) => {
    const { fingerprint } = method;
    const find = (stack, [timestamp, details]) => {
      const namespaced = typeof method === "string";
      /*
      const match = !![
        namespaced && search(method).in(details.path),
        search(params(props)).in(details.params)
      ].filter(Boolean).length;
      */
      const match = namespaced
        ? starts(details.path.join(".")).with(method)
        : true;

      return !match ? stack : stack.concat({ ...details, timestamp });
    };
    const flatten = object => Object.entries(object).reduce(dig, []);
    const getChannel = () =>
      !!fingerprint
        ? Object.entries(listenable[fingerprint] || {})
        : flatten(listenable);
    const events = getChannel().reduce(find, []);
    const broadcast = format ? format(events) : events;
    const value = broadcast || {};
    const getValue = () =>
      typeof prop === "function" ? prop(value) : { [prop]: value };

    return Object.assign(stack, getValue());
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
  const Listen = ({ children, to, as, format }) =>
    Children.map(children, child =>
      listen({
        prop: as,
        method: to,
        format
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

export const hookEvents = () => ({
  componentDidMount() {
    const {
      props: { load = noop, register = noop }
    } = this;

    register();
    load();
  },
  componentWillUnmount() {
    const {
      props: { deregister = noop, network }
    } = this;

    network.forEach(shutdown);

    deregister();
  }
});

export default compose(
  connect(selectors),
  withStateHandlers(initialState, reducers),
  withProps(connectToDB),
  lifecycle(hookEvents()),
  omitProps(reserved),
  setStatics(statics)
);
