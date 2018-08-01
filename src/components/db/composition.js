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
  "network",
  "request"
];

export const omitProps = composition(mapProps, omit);

export const call = (...params) => callback => callback(...params);

export const getType = method => `${RUN}: ${method}`;

export const printArgs = params => params.map(JSON.stringify).join(", ");

export const getDefaultDBMethodsFrom = ({ children }) => {
  const namespace = getDisplayName(children);

  return {
    register: () => Promise.resolve({ mutation: register(namespace) }),
    deregister: () => Promise.resolve({ mutation: deregister(namespace) })
  };
};

export const bindTo = props => (path, method) => {
  const { children, request, dispatch } = props;
  const namespace = [getDisplayName(children), ...path].join(".");
  const fingerprint = md5(method);

  return Object.assign(
    (...params) => {
      const timestamp = new Date().getTime();

      request({
        fingerprint,
        timestamp,
        details: { loading: true, params, path }
      });

      return method(...params)
        .then(({ mutation, output }) => {
          request({
            fingerprint,
            timestamp,
            details: { loading: false, output }
          });

          dispatch({
            type: getType(`${namespace}(${printArgs(params)});`),
            mutation: ensure(mutation).map(call(props))
          });
        })
        .catch(({ error }) =>
          request({
            fingerprint,
            timestamp,
            details: { loading: false, error }
          })
        );
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

export default compose(
  connect(selectors),
  withStateHandlers(initialState, reducers),
  withProps(connectToDB),
  lifecycle({
    componentDidMount() {
      const {
        props: { load = noop, register = noop }
      } = this;

      register();
      load();
    },
    componentWillUnmount() {
      const {
        props: { deregister = noop }
      } = this;

      deregister();
    }
  }),
  omitProps(reserved),
  setStatics(statics)
);
