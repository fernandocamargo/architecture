import React from "react";

import Items from "components/charts/x-ray/items";

export default ({ className, items }) => (
  <blockquote className={className}>
    <Items>{items}</Items>
  </blockquote>
);
