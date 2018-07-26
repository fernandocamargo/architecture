import React from "react";

import Title from "components/title";
import Menu from "components/menu";
import { Generic as GenericMessages } from "i18n/messages";

export const extractURLFrom = (items, base = "") => {
  return items.map(({ url = "", children = [], ...item }) => {
    const URL = base + url;

    return {
      url: URL,
      children: extractURLFrom(children, URL),
      ...item
    };
  });
};

export const getMenu = () =>
  extractURLFrom([
    { title: "Cockpit", url: "/" },
    { title: "Rankings", url: "/rankings" },
    { title: "Reviews", url: "/reviews" },
    { title: "Spy", url: "/spy" },
    { title: "Inventory", url: "/inventory" },
    {
      title: "Profit",
      url: "/profit",
      children: [
        { title: "Overview" },
        {
          title: "Costs",
          url: "/costs",
          children: [
            { title: "Expenses", url: "/expenses" },
            { title: "FBM", url: "/fbm" }
          ]
        },
        { title: "Profit & Loss", url: "/loss" },
        { title: "Breakdown", url: "/breakdown" },
        { title: "Returns", url: "/returns" },
        { title: "Promos", url: "/promos" },
        { title: "Global Overview", url: "/global" }
      ]
    },
    { title: "PPC Manager", url: "/ppc-manager" }
  ]);

export default ({ intl: { formatMessage }, title, children, className }) => (
  <div className={className}>
    <Title>
      {[
        formatMessage(GenericMessages.brand),
        formatMessage(GenericMessages.product),
        title
      ]}
    </Title>
    <header className="header">
      <Menu>{getMenu()}</Menu>
    </header>
    <main role="main" className="content">
      {children}
    </main>
  </div>
);
