import React, { createElement } from "react";
import { Route } from "react-router";
import loadable from "react-loadable";

import { RUN } from "actions";
import Loading from "components/loading";

export let hacky = true;

export const getType = method => `${RUN}: ${method}`;

export const printArgs = params => params.map(JSON.stringify).join(", ");

export const replace = (object, path = []) => ({
  with: replacement =>
    Object.entries(object).reduce((stack, [key, value]) => {
      const deep = !!Object.keys(value).length;
      const fragment = path.concat(key);

      return Object.assign(stack, {
        [key]: deep
          ? replace(value, fragment).with(replacement)
          : replacement(fragment.join("."), value)
      });
    }, {})
});

export const render = ({ default: component }, props) => {
  const { displayName, DB = Object.create } = component;
  const { dispatch } = props;
  const { load, ...methods } = replace(DB(props)).with(
    (name, callback) => (...params) => {
      const method = [displayName, name].join(".");

      return callback(...params).then(mutations =>
        dispatch({
          type: getType(`${method}(${printArgs(params)});`),
          method,
          params,
          mutations
        })
      );
    }
  );

  if (load && hacky) {
    hacky = false;
    load();
  }

  return createElement(component, { ...props, ...methods });
};

export const load = component => ({
  with: enhancement => props =>
    createElement(
      loadable({
        loader: component,
        loading: Loading,
        render
      }),
      { ...props, ...enhancement }
    )
});

export default ({ component, render, props, ...route }) => (
  <Route render={render || load(component).with(props)} {...route} />
);
