import { compose, withProps, withHandlers } from "recompose";
import { withRouter } from "react-router-dom";

import setStatics from "helpers/rendering/statics/set";
import omitProps from "behaviors/omit-props";

import * as statics from "./statics";
import withStyle from "./style";
import props from "./props";
import * as events from "./events";

export default compose(
  withStyle,
  withRouter,
  withProps(props),
  withHandlers(events),
  omitProps(["staticContext", "match", "history", "goTo"]),
  setStatics(statics)
);
