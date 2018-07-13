import { createElement } from "react";
import { compose, withStateHandlers, withProps } from "recompose";

import setStatics from "helpers/rendering/statics/set";
import * as Fields from "components/fields";

import * as statics from "./statics";

console.log({ createElement });

export const getInitialState = ({ fields }) => ({
  data: fields.reduce(
    (stack, { name, value }) =>
      Object.assign(stack, {
        [name]: value
      }),
    {}
  ),
  original: false,
  debugging: false
});

export default compose(
  setStatics(statics),
  withStateHandlers(getInitialState, {}),
  withProps(({ fields, data }) => ({
    fields: fields.map(({ name, type }) =>
      createElement(Fields[type], {
        key: name,
        value: data[name],
        onChange: () => {}
      })
    )
  }))
);
