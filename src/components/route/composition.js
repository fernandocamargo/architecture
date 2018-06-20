import { createElement } from "react";
import { compose, mapProps } from "recompose";

import setStatics from "helpers/rendering/statics/set";

import * as statics from "./statics";

export const enhance = component => ({
  with: enhancement => props =>
    createElement(component, { ...enhancement, ...props })
});

export default compose(
  setStatics(statics),
  mapProps(({ component, render, props: root, ...props }) => ({
    render: render || enhance(component).with(root),
    ...props
  }))
);
