import { compose } from "recompose";

import setStatics from "helpers/rendering/statics/set";
import withDB from "behaviors/db";

import * as statics from "./statics";
import withStyle from "./style";

export default compose(
  withStyle,
  withDB,
  setStatics(statics)
);
