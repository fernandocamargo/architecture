import React from "react";

import Link from "components/link";
import MenuItems from "components/menu/items";

export default ({
  className,
  title,
  label,
  url,
  nested,
  isActive,
  children
}) => (
  <li className={className}>
    <Link to={url} title={title} aria-labelledby={label} isActive={isActive}>
      {title}
    </Link>
    {nested && <MenuItems isActive={isActive}>{children}</MenuItems>}
  </li>
);
