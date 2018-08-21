import { compose, withProps } from "recompose";
import { injectIntl } from "react-intl";

import setStatics from "helpers/rendering/statics/set";

import * as statics from "./statics";
import props from "./props";

export default compose(
  injectIntl,
  withProps(props),
  setStatics(statics)
);
