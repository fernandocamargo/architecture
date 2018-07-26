import React from "react";
import { Helmet } from "react-helmet";

export default ({ children }) => (
  <Helmet>
    <title>{children}</title>
  </Helmet>
);
