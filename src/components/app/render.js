import React from "react";
import { Route } from "react-router-dom";

import Header from "components/header";
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
    <main role="main" className="content">
      <Route path="/" component={Cockpit} exact />
      <Route path="/rankings" component={Rankings} />
      <Route path="/reviews" component={Reviews} />
      <Route path="/spy" component={Spy} />
      <Route path="/inventory" component={Inventory} />
      <Route path="/profit" component={Profit} />
      <Route path="/ppc-manager" component={PPCManager} />
    </main>
  </div>
);
