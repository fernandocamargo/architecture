import { compose, withStateHandlers } from "recompose";

import setStatics from "helpers/rendering/statics/set";

import * as statics from "./statics";
import initialState from "./initial-state";

export default compose(
  withStateHandlers(initialState),
  setStatics(statics)
);
