import { Children } from "react";
import { compose, withProps } from "recompose";

import setStatics from "helpers/rendering/statics/set";

import * as statics from "./statics";

export default compose(
  setStatics(statics),
  withProps(({ children }) => ({
    children: Children.toArray(children).join(" :: ")
  }))
);
