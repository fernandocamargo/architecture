import React from "react";

import forEach from "helpers/rendering/for-each";
import Item from "components/charts/x-ray/item";

export default ({ className, children }) => (
  <div className={className}>{forEach(children).render(Item)}</div>
);
