import update from 'immutability-helper';

import { UPDATE } from 'actions';

import initialState from './initial-state';

export default (state = initialState(), { type, mutation }) => {
  switch (type) {
    case UPDATE:
      return update(state, mutation);
    default:
      return state;
  }
};
