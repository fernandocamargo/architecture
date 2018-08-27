import { compose, withProps, withStateHandlers } from "recompose";
import { injectIntl } from "react-intl";

import setStatics from "helpers/rendering/statics/set";

import * as statics from "./statics";
import withStyle from "./style";
import props from "./props";
import initialState from "./initial-state";

export default compose(
  withStyle,
  injectIntl,
  withProps(props),
  withStateHandlers(initialState),
  setStatics(statics)
);
