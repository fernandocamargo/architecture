import React, { createElement } from "react";
import md5 from "md5";
import update from "immutability-helper";
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
      const location = path.concat(key);

      return Object.assign(stack, {
        [key]: deep
          ? replace(value, location).with(replacement)
          : replacement(location, value)
      });
    }, {})
});

// export const events = new Map();

export class Events {
  constructor() {
    this.value = {};
  }

  register(method) {
    const { value } = this;
    const timestamp = new Date().getTime();

    this.value = update(value, {
      [md5(method)]: {
        $set: {
          [timestamp]: {
            loading: true,
            success: null,
            error: null
          }
        }
      }
    });
  }
}

export const events = new Events();

export const getState = extra => ({
  loading: true,
  error: null,
  ...extra
});

export const render = ({ default: component }, props) => {
  const { displayName, DB = Object.create } = component;
  const { dispatch } = props;
  const { load, ...methods } = replace(DB(props)).with((path, wrapped) =>
    Object.assign((...params) => {
      const namespace = [displayName, ...path].join(".");
      // const identity = events.register(wrapped);
      // const instance = !events.has(identity) ? new Map() : events.get(identity);

      // events.set(identity, instance.set(timestamp, getState({ params })));

      return wrapped(...params)
        .then(mutations => {
          /*
          events.set(
            identity,
            instance.set(
              timestamp,
              update(instance.get(timestamp), {
                loading: { $set: false },
                success: { $set: mutations }
              })
            )
          );
          */

          return dispatch({
            type: getType(`${namespace}(${printArgs(params)});`),
            method: namespace,
            params,
            mutations
          });
        })
        .catch(error => {
          /*
          events.set(
            identity,
            instance.set(
              timestamp,
              update(instance.get(timestamp), {
                loading: { $set: false },
                error: { $set: error }
              })
            )
          )
          */
        });
    })
  );

  if (load && hacky) {
    hacky = false;
    load();
  }

  console.log(JSON.stringify(events, null, 2));

  // console.log(events);

  return createElement(component, {
    ...props,
    ...methods,
    watch: (settings = []) => {
      const events = Array.isArray(settings) ? settings : [settings];

      return {
        in: component => _props =>
          createElement(component, {
            ..._props,
            ...events.reduce(
              (stack, { prop }) =>
                Object.assign({
                  [prop]: {
                    loading: false,
                    success: null,
                    error: null
                  }
                }),
              {}
            )
          })
      };
    }
  });
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
