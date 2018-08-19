import React from "react";
import { NavLink as Link } from "react-router-dom";

export default props => <Link activeClassName="active" {...props} exact />;
