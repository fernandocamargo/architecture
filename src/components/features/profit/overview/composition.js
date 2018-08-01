import { compose } from "recompose";

import setStatics from "helpers/rendering/statics/set";
import withDB from "behaviors/db";

import * as statics from "./statics";

export default compose(
  withDB,
  setStatics(statics)
);
