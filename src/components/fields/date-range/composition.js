import { compose, withStateHandlers, withHandlers } from "recompose";

import setStatics from "helpers/rendering/statics/set";

import * as statics from "./statics";
import withStyle from "./style";
import initialState from "./initial-state";
import * as reducers from "./reducers";
import * as events from "./events";

export default compose(
  withStyle,
  withStateHandlers(initialState, reducers),
  withHandlers(events),
  setStatics(statics)
);
