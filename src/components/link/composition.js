import { compose, withProps, withHandlers } from "recompose";

import setStatics from "helpers/rendering/statics/set";

import * as statics from "./statics";
import withStyle from "./style";
import props from "./props";
import * as events from "./events";

export default compose(
  withStyle,
  withProps(props),
  withHandlers(events),
  setStatics(statics)
);
