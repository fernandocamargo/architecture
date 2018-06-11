import React, { createElement } from 'react';
import { Route } from 'react-router';
import loadable from 'react-loadable';

import { UPDATE } from 'actions';
import Loading from 'components/loading';

export let hacky = true;

export const empty = () => ({});

export const render = ({ default: component }, props) => {
  const { displayName, DB = empty } = component;
  const { dispatch } = props;
  const { load, ...methods } = Object.entries(DB(props)).reduce(
    (stack, [name, method]) =>
      Object.assign(stack, {
        [name]: (...params) =>
          method(...params).then(mutation =>
            dispatch({
              type: UPDATE,
              method: `${displayName}.${name}();`,
              params,
              mutation,
            }),
          ),
      }),
    {},
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
        render,
      }),
      { ...props, ...enhancement },
    ),
});

export default ({ component, render, props, ...route }) => (
  <Route render={render || load(component).with(props)} {...route} />
);
