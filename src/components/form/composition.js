import { createElement } from "react";
import { compose, withStateHandlers, withHandlers, withProps } from "recompose";

import setStatics from "helpers/rendering/statics/set";
import * as Fields from "components/fields";

import * as statics from "./statics";
import withStyle from "./style";
import initialState from "./initial-state";
import * as reducers from "./reducers";

export default compose(
  withStyle,
  setStatics(statics),
  withStateHandlers(initialState, reducers),
  withHandlers({
    submit: ({ onSubmit, data }) => event => {
      event.preventDefault();
      onSubmit(data);
    }
  }),
  withProps(({ fields, data, change, onChange }) => ({
    fields: fields.map(({ name, type, label, settings }) =>
      createElement(Fields[type], {
        onChange: value => change({ name, value }),
        value: data[name],
        key: name,
        type,
        name,
        label,
        ...settings
      })
    )
  }))
);
