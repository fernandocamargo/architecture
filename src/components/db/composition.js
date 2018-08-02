import noop from "lodash/noop";
import constant from "lodash/constant";
import composition from "lodash/fp/compose";
import omit from "lodash/fp/omit";
import md5 from "md5";
import {
  compose,
  getDisplayName,
  withStateHandlers,
  withProps,
  lifecycle,
  mapProps
} from "recompose";
import { isValidElement, cloneElement, createElement } from "react";
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

export const clear = (_, promise) => promise.cancel();

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
  const fingerprint = md5(method);
  const wrapped = (...params) => {
    const output = method(...params);
    const type = getType(`${namespace}(${printArgs(params)});`);
    const start = new Date();
    const timestamp = start.getTime();
    const receive = promise => ({ mutation = [], output, error }) => {
      disconnect(promise);

      log({
        fingerprint,
        timestamp,
        details: {
          loading: false,
          finish: new Date(),
          ...(output && { output }),
          ...(error && { error })
        }
      });

      dispatch({
        mutation: ensure(mutation).map(call(props)),
        type
      });
    };
    const async = () => {
      const promise = wrap(output);

      connect(promise);

      log({
        fingerprint,
        timestamp,
        details: { loading: true, params, path, start }
      });

      return promise.then(receive(promise)).catch(receive(promise));
    };
    const sync = () => {
      dispatch({
        mutation: ensure(output).map(call(props)),
        type
      });
    };

    return (isThenable(output) ? async : sync)();
  };

  return Object.assign(wrapped, { fingerprint });
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

  return {
    ...replace({
      ...DB(props),
      register: () => register(namespace),
      deregister: () => deregister(namespace)
    }).with(bindTo(props)),
    listen: listenTo(history)
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

    network.forEach(clear);

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
