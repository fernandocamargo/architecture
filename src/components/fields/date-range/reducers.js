import update from "immutability-helper";

export const focus = state => input =>
  update(state, {
    focused: {
      $set: input
    }
  });
