import update from "immutability-helper";

import { RUN } from "actions";

import initialState from "./initial-state";

export const ensure = collection =>
  Array.isArray(collection) ? collection : [collection];

export const apply = (state, mutation) => update(state, mutation);

export default (state = initialState(), { type, mutation }) => {
  switch (true) {
    case type.substr(0, RUN.length) === RUN:
      return ensure(mutation).reduce(apply, state);
    default:
      return state;
  }
};
