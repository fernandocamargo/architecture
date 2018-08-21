import { compose } from "recompose";
import { injectIntl } from "react-intl";

import setStatics from "helpers/rendering/statics/set";

import * as statics from "./statics";

export default compose(
  injectIntl,
  setStatics(statics)
);
