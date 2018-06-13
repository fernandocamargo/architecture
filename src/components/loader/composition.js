import React from "react";
import { compose, withProps } from "recompose";
import Loader from "react-loadable";

import setStatics from "helpers/rendering/statics/set";

import * as statics from "./statics";

export default compose(
  setStatics(statics),
  withProps(({}) => ({
    loader: props => <Loader />
  }))
);
