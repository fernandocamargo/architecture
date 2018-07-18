import { compose } from "recompose";

import setStatics from "helpers/rendering/statics/set";

import * as statics from "./statics";
import withStyle from "./style";

export default compose(
  setStatics(statics),
  withStyle
);
