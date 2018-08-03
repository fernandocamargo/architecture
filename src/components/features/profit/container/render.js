import React, { Fragment } from "react";
import { Route } from "react-router-dom";

import Menu from "components/menu";
import { Overview, Costs } from "components/features/profit";

export default ({ menu }) => (
  <Fragment>
    <Menu>{menu}</Menu>
    <Route path="/profit" component={Overview} exact />
    <Route path="/profit/costs" component={Costs} />
  </Fragment>
);
