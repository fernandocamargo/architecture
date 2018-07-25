import { cloneElement, createElement } from "react";
import { compose, withProps } from "recompose";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import setStatics from "helpers/rendering/statics/set";
import DB from "components/db";

import * as statics from "./statics";
import mapStateToProps from "./selectors";
import withStyle from "./style";

export const connectDB = component => ({
  with: props => createElement(DB, { ...props, component })
});

export default compose(
  setStatics(statics),
  withRouter,
  connect(mapStateToProps),
  withProps(({ children, ...props }) => ({
    children: cloneElement(children, {
      ...props,
      connectDB
    })
  })),
  withStyle
);
