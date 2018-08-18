import React from "react";
import { NavLink as Link } from "react-router-dom";

export default ({ to, title, className, children, attributes }) => (
  <Link
    {...attributes}
    to={to}
    className={className}
    activeClassName="active"
    exact
  >
    {children}
  </Link>
);
