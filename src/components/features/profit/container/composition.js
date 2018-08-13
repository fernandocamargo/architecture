import { compose, withStateHandlers } from "recompose";

import setStatics from "helpers/rendering/statics/set";

import * as statics from "./statics";
import initialState from "./initial-state";
import withStyle from "./style";

export default compose(
  withStyle,
  withStateHandlers(initialState),
  setStatics(statics)
);
