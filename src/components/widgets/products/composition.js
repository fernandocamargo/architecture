import { compose, withStateHandlers } from "recompose";
import { injectIntl } from "react-intl";

import setStatics from "helpers/rendering/statics/set";

import * as statics from "./statics";
import initialState from "./initial-state";
import withStyle from "./style";

export default compose(
  withStyle,
  injectIntl,
  withStateHandlers(initialState),
  setStatics(statics)
);
