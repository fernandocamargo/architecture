import React from "react";

import Link from "components/link";
import MenuItems from "components/menu/items";

export default ({ title, url, children }) => (
  <li>
    <Link to={url} title={title}>
      {title}
    </Link>
    {children && <MenuItems>{children}</MenuItems>}
  </li>
);
