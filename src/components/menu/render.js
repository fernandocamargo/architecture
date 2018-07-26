import React from "react";
import { Link } from "react-router-dom";

import forEach from "helpers/rendering/for-each";
import { Generic as GenericMessages } from "i18n/messages";

export const Items = ({ children }) => (
  <ul>{forEach(children).render(Item)}</ul>
);

export const Item = ({ title, url, children }) => (
  <li>
    <Link to={url} title={title}>
      {title}
    </Link>
    {children && <Items>{children}</Items>}
  </li>
);

export default ({ intl: { formatMessage }, title, children, className }) => (
  <nav className={className}>
    <h4>{title || `${formatMessage(GenericMessages["browse-through"])}:`}</h4>
    <Items>{children}</Items>
  </nav>
);
