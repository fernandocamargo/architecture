import React from "react";

export default ({ className, children }) => (
  <main role="main" className={className}>
    {children}
  </main>
);
