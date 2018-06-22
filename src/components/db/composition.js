import md5 from "md5";
import { isValidElement, createElement, cloneElement } from "react";
import { compose, withStateHandlers, withProps, lifecycle } from "recompose";

import { RUN } from "actions";
import setStatics from "helpers/rendering/statics/set";

import * as statics from "./statics";
import initialState from "./initial-state";
import * as reducers from "./reducers";

export const noop = () => {};

export const getType = method => `${RUN}: ${method}`;

export const printArgs = params => params.map(JSON.stringify).join(", ");

export const ensureArray = object =>
  Array.isArray(object) ? object : [object];

export const replace = (object, path = []) => ({
  with: replacement =>
    Object.entries(object).reduce((stack, [key, value]) => {
      const deep = !!Object.keys(value).length;
      const location = path.concat(key);

      return Object.assign(stack, {
        [key]: deep
          ? replace(value, location).with(replacement)
          : replacement(location, value)
      });
    }, {})
});

export const listen = listenable => settings => {
  const listeners = ensureArray(settings);
  const getListenersFrom = props =>
    listeners.reduce((stack, { prop, method = {}, params, format }) => {
      const { fingerprint } = method;
      const channel = listenable[fingerprint] || {};
      const events = Object.entries(channel).reduce(
        (stack, [timestamp, details]) => {
          const match = !!~details.params
            .toString()
            .indexOf(params(props).toString());

          return !match ? stack : stack.concat({ ...details, timestamp });
        },
        []
      );
      const broadcast = format ? format(events) : events;

      return Object.assign(stack, { [prop]: broadcast });
    }, {});

  return {
    in: component =>
      isValidElement(component)
        ? cloneElement(component, getListenersFrom())
        : props =>
            createElement(component, { ...props, ...getListenersFrom(props) })
  };
};

export default compose(
  setStatics(statics),
  withStateHandlers(initialState, reducers),
  withProps(({ component, ...props }) => {
    const { network, dispatch, register } = props;
    const { displayName, DB = Object.create } = component;
    const methods = replace(DB(props)).with((path, method) => {
      const namespace = [displayName, ...path].join(".");
      const fingerprint = md5(method);

      return Object.assign(
        (...params) => {
          const timestamp = new Date().getTime();

          register({
            fingerprint,
            timestamp,
            details: { loading: true, params, path }
          });

          return method(...params)
            .then(({ mutation, output }) => {
              register({
                fingerprint,
                timestamp,
                details: { loading: false, output }
              });

              dispatch({
                type: getType(`${namespace}(${printArgs(params)});`),
                method: namespace,
                params,
                mutation
              });
            })
            .catch(({ error }) =>
              register({
                fingerprint,
                timestamp,
                details: { loading: false, error }
              })
            );
        },
        {
          fingerprint
        }
      );
    });

    console.clear();
    console.log(JSON.stringify(network, null, 2));

    return { ...methods, listen: listen(network) };
  }),
  lifecycle({
    componentDidMount() {
      const {
        props: { load = noop }
      } = this;

      load();
    }
  })
);
