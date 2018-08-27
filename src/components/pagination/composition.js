import { compose, withHandlers, withStateHandlers } from "recompose";
import { injectIntl } from "react-intl";

import setStatics from "helpers/rendering/statics/set";

import * as statics from "./statics";
import withStyle from "./style";
import initialState from "./initial-state";
import * as events from "./events";

export default compose(
  withStyle,
  injectIntl,
  withHandlers(events),
  withStateHandlers(initialState),
  setStatics(statics)
);
