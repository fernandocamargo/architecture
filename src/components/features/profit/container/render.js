import React from "react";
import { Route } from "react-router-dom";

import Menu from "components/menu";
import { Overview, Costs } from "components/features/profit";

export default ({ className, menu }) => (
  <div className={className}>
    <Menu>{menu}</Menu>
    <Route path="/profit" component={Overview} exact />
    <Route path="/profit/costs" component={Costs} />
  </div>
);
