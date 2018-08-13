import React from "react";

import Link from "components/link";
import MenuItems from "components/menu/items";

export default ({ className, title, url, children }) => (
  <li className={className}>
    <Link to={url} title={title}>
      {title}
    </Link>
    {!!children.length && <MenuItems>{children}</MenuItems>}
  </li>
);
