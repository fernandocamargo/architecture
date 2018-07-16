import { compose, withHandlers } from "recompose";

import setStatics from "helpers/rendering/statics/set";

import * as statics from "./statics";

export default compose(
  setStatics(statics),
  withHandlers({
    change: ({ onChange }) => ({ target: { value } }) => onChange(value)
  })
);
