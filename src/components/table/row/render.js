import React from "react";

import forEach from "helpers/rendering/for-each";
import { Cell } from "components/table";

export default ({ className, children }) => (
  <tr className={className}>{forEach(children).render(Cell)}</tr>
);
