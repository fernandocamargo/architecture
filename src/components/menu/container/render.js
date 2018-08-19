import React from "react";

import MenuItems from "components/menu/items";
import { Generic as GenericMessages } from "i18n/messages";

export default ({
  intl: { formatMessage },
  className,
  title,
  isActive,
  children
}) => (
  <nav className={className}>
    <h4>{title || `${formatMessage(GenericMessages["browse-through"])}:`}</h4>
    <MenuItems isActive={isActive}>{children}</MenuItems>
  </nav>
);
