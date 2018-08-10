import React from "react";

import forEach from "helpers/rendering/for-each";
import List from "components/list";
import MenuItem from "components/menu/item";

export default ({ children }) => (
  <List>{forEach(children).render(MenuItem)}</List>
);
