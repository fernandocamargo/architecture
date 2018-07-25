import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

import { Generic as GenericMessages } from "i18n/messages";

export const breadcrumb = (...fragments) => fragments.join(" :: ");

export default ({ intl: { formatMessage }, title, children, className }) => (
  <div className={className}>
    <Helmet>
      <title>
        {breadcrumb(
          formatMessage(GenericMessages.brand),
          formatMessage(GenericMessages.product),
          title
        )}
      </title>
    </Helmet>
    <header className="header">
      <nav className="menu">
        <ul>
          <li>
            <Link to="/">Overview</Link>
          </li>
          <li>
            <Link to="/costs">Costs</Link>
          </li>
          <li>
            <Link to="/profit-and-loss">Profit & Loss</Link>
          </li>
          <li>
            <Link to="/breakdown">Breakdown</Link>
          </li>
          <li>
            <Link to="/returns">Returns</Link>
          </li>
          <li>
            <Link to="/promos">Promos</Link>
          </li>
          <li>
            <Link to="/global">Global Overview</Link>
          </li>
        </ul>
      </nav>
    </header>
    <main role="main" className="content">
      {children}
    </main>
  </div>
);
