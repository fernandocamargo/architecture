import React from "react";

import forEach from "helpers/rendering/for-each";
import MenuItem from "components/menu/item";

export default ({ children }) => <ul>{forEach(children).render(MenuItem)}</ul>;
