import React from "react";

import Brand from "components/brand";
import Menu from "components/menu";

export default ({ className, isActive, menu }) => (
  <header className={className}>
    <Brand url="/" />
    <Menu isActive={isActive}>{menu}</Menu>
  </header>
);
