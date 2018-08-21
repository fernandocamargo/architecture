import { compose, withProps } from "recompose";
import { injectIntl } from "react-intl";

import setStatics from "helpers/rendering/statics/set";

import * as statics from "./statics";
import props from "./props";
import withStyle from "./style";

export default compose(
  withStyle,
  injectIntl,
  withProps(props),
  setStatics(statics)
);
