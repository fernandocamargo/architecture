import { compose } from "recompose";
import { injectIntl } from "react-intl";

import setStatics from "helpers/rendering/statics/set";

import * as statics from "./statics";
import withStyle from "./style";

export default compose(
  withStyle,
  injectIntl,
  setStatics(statics)
);
