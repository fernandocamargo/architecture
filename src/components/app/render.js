import React from "react";

import Menu from "components/menu";

export default ({ children, className, menu }) => (
  <div className={className}>
    <header className="header">
      <Menu>{menu}</Menu>
    </header>
    <main role="main" className="content">
      {children}
    </main>
  </div>
);
