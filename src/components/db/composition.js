import md5 from "md5";
import { compose, withStateHandlers, withProps, lifecycle } from "recompose";

import { RUN } from "actions";
import setStatics from "helpers/rendering/statics/set";

import * as statics from "./statics";
import initialState from "./initial-state";
import * as reducers from "./reducers";

export const noop = () => {};

export const getType = method => `${RUN}: ${method}`;

export const printArgs = params => params.map(JSON.stringify).join(", ");

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

export default compose(
  setStatics(statics),
  withStateHandlers(initialState, reducers),
  withProps(({ component, ...props }) => {
    const { dispatch } = props;
    const { displayName, DB = Object.create } = component;
    const methods = replace(DB(props)).with((path, method) => {
      const namespace = [displayName, ...path].join(".");
      const fingerprint = md5(method);

      return Object.assign(
        (...params) =>
          method(...params).then(mutation =>
            dispatch({
              type: getType(`${namespace}(${printArgs(params)});`),
              method: namespace,
              params,
              mutation
            })
          ),
        {
          fingerprint
        }
      );
    });

    return {
      ...methods,
      watch: () => ({
        in: a => a
      })
    };
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
