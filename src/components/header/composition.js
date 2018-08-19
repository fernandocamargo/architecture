import { compose, withProps } from "recompose";

import setStatics from "helpers/rendering/statics/set";

import * as statics from "./statics";
import withStyle from "./style";
import props from "./props";

export default compose(
  withStyle,
  withProps(props),
  setStatics(statics)
);
