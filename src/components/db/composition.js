import noop from "lodash/noop";
import constant from "lodash/constant";
import composition from "lodash/fp/compose";
import omit from "lodash/fp/omit";
// import md5 from "md5";
import { isValidElement, cloneElement, createElement, Children } from "react";
import {
  compose,
  getDisplayName,
  withStateHandlers,
  withProps,
  lifecycle,
  mapProps
} from "recompose";
import { connect } from "react-redux";

import { RUN } from "actions";
import Promise from "helpers/promise";
import ensure from "helpers/array/ensure";
import replace from "helpers/object/replace";
import setStatics from "helpers/rendering/statics/set";
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
  "network",
  "connect",
  "disconnect"
];

export const shutdown = (_, promise) => promise.cancel();

export const wrap = promise =>
  new Promise((resolve, reject) => promise.then(resolve).catch(reject));

export const omitProps = composition(mapProps, omit);

export const call = (...params) => callback => callback(...params);

export const getType = method => `${RUN}: ${method}`;

export const printArgs = params => params.map(JSON.stringify).join(", ");

export const isThenable = object =>
  object instanceof window.Promise || object instanceof Promise;

export const bindTo = props => (path, method) => {
  const { children, connect, disconnect, log, dispatch } = props;
  const namespace = [getDisplayName(children), ...path].join(".");
  // const fingerprint = md5(method);
  const wrapped = (...params) => {
    const response = method(...params);
    const type = getType(`${namespace}(${printArgs(params)});`);
    const start = new Date();
    const timestamp = start.getTime();
    const success = ({ mutation = [], output, error }) => {
      log({
        fingerprint: namespace,
        details: {
          loading: false,
          finish: new Date(),
          ...(output && { output }),
          ...(error && { error })
        },
        timestamp
      });

      dispatch({
        mutation: ensure(mutation).map(call(props)),
        type
      });
    };
    const receive = promise => (...lol) => {
      disconnect(promise);

      return success(...lol);
    };
    const async = () => {
      const promise = wrap(response);

      connect(promise);

      return promise.then(receive(promise)).catch(receive(promise));
    };

    log({
      details: { loading: true, params, path, start },
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
    { prop, method = {}, params = constant(""), format }
  ) => {
    const { fingerprint } = method;
    const channel = listenable[fingerprint] || {};
    const find = (stack, [timestamp, details]) => {
      const match = !!~details.params
        .toString()
        .indexOf(params(props).toString());

      return !match ? stack : stack.concat({ ...details, timestamp });
    };
    const events = Object.entries(channel).reduce(find, []);
    const broadcast = format ? format(events) : events;
    const value = broadcast || {};

    return Object.assign(stack, { [prop]: value });
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
