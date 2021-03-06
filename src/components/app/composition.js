import { compose, withStateHandlers } from "recompose";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import setStatics from "helpers/rendering/statics/set";

import * as statics from "./statics";
import initialState from "./initial-state";
import mapStateToProps from "./selectors";
import withStyle from "./style";

export default compose(
  withStyle,
  withRouter,
  connect(mapStateToProps),
  withStateHandlers(initialState),
  setStatics(statics)
);
