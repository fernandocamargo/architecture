import React from "react";

import Brand from "components/brand";
import Menu from "components/menu";

export default ({ className, menu }) => (
  <header className={className}>
    <Brand url="/" />
    <Menu>{menu}</Menu>
  </header>
);
