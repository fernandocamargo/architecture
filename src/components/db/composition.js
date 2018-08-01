import noop from "lodash/noop";
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
  "log"
];

export const clear = (_, promise) => promise.cancel();

export const wrap = promise =>
  new Promise((resolve, reject) => promise.then(resolve).catch(reject));

export const omitProps = composition(mapProps, omit);

export const call = (...params) => callback => callback(...params);

export const getType = method => `${RUN}: ${method}`;

export const printArgs = params => params.map(JSON.stringify).join(", ");

export const getDefaultDBMethodsFrom = ({ children }) => {
  const namespace = getDisplayName(children);

  return {
    register: () => register(namespace),
    deregister: () => deregister(namespace)
  };
};

export const isThenable = object =>
  object instanceof window.Promise || object instanceof Promise;

export const bindTo = props => (path, method) => {
  const { children, connect, disconnect, log, dispatch } = props;
  const namespace = [getDisplayName(children), ...path].join(".");
  const fingerprint = md5(method);

  return Object.assign(
    (...params) => {
      const timestamp = new Date().getTime();
      const output = method(...params);

      switch (true) {
        case isThenable(output):
          const promise = wrap(output);

          connect(promise);

          log({
            fingerprint,
            timestamp,
            details: { loading: true, params, path }
          });

          return promise
            .then(({ mutation = [], output }) => {
              disconnect(promise);

              log({
                fingerprint,
                timestamp,
                details: { loading: false, output }
              });

              dispatch({
                type: getType(`${namespace}(${printArgs(params)});`),
                mutation: ensure(mutation).map(call(props))
              });
            })
            .catch(({ mutation = [], error }) => {
              disconnect(promise);

              log({
                fingerprint,
                timestamp,
                details: { loading: false, error }
              });

              dispatch({
                type: getType(`${namespace}(${printArgs(params)});`),
                mutation: ensure(mutation).map(call(props))
              });
            });
        default:
          dispatch({
            type: getType(`${namespace}(${printArgs(params)});`),
            mutation: ensure(output).map(call(props))
          });

          return output;
      }
    },
    { fingerprint }
  );
};

export const connectToDB = props => {
  const {
    children: { DB: getCustomDBMethodsFrom = Object.create }
  } = props;

  return replace({
    ...getCustomDBMethodsFrom(props),
    ...getDefaultDBMethodsFrom(props)
  }).with(bindTo(props));
};

export const hook = () => ({
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
  lifecycle(hook()),
  omitProps(reserved),
  setStatics(statics)
);
