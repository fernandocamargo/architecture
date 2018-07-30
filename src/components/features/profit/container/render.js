import React from "react";
import { Route } from "react-router-dom";

import Menu from "components/menu";
import { Overview, Costs } from "components/features/profit";

export default ({ menu }) => (
  <div>
    <header className="header">
      <Menu>{menu}</Menu>
    </header>
    <Route path="/profit" component={Overview} exact />
    <Route path="/profit/costs" component={Costs} />
  </div>
);
