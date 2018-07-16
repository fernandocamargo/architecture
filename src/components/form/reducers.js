import update from "immutability-helper";

export const change = state => ({ name, value }) =>
  update(state, {
    data: {
      [name]: {
        $set: value
      }
    }
  });
