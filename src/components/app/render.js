import React from "react";
import { Route } from "react-router-dom";

import Header from "components/header";
import Content from "components/content";
import {
  Cockpit,
  Rankings,
  Reviews,
  Spy,
  Inventory,
  Profit,
  PPCManager
} from "components/features";

export default ({ children, className, menu }) => (
  <div className={className}>
    <Header menu={menu} />
    <Content>
      <Route path="/" component={Cockpit} exact />
      <Route path="/rankings" component={Rankings} />
      <Route path="/reviews" component={Reviews} />
      <Route path="/spy" component={Spy} />
      <Route path="/inventory" component={Inventory} />
      <Route path="/profit" component={Profit} />
      <Route path="/ppc-manager" component={PPCManager} />
    </Content>
  </div>
);
