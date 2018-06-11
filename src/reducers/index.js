import update from "immutability-helper";

import { RUN } from "actions";

import initialState from "./initial-state";

export const ensure = collection =>
  Array.isArray(collection) ? collection : [collection];

export const apply = (state, mutation) => update(state, mutation);

export default (state = initialState(), { type, mutations }) => {
  switch (true) {
    case !!~type.indexOf(RUN):
      return ensure(mutations).reduce(apply, state);
    default:
      return state;
  }
};
