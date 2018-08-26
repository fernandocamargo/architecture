import property from "lodash/property";
import React, { Fragment } from "react";

import Table from "components/table";
import Product from "components/product";
import Percentage from "components/percentage";
import Currency from "components/currency";
import Menu from "components/menu";

export default ({ rows }) => (
  <Table
    columns={[
      {
        label: () => "starred",
        content: ({ item: { starred } }) => String(starred)
      },
      {
        label: () => <Fragment>Product</Fragment>,
        content: ({
          item: { productName, customName },
          links: { amazon, sellerCentral },
          pk: { sku },
          asin
        }) => (
          <Product
            name={customName || productName}
            sku={{ title: sku, url: amazon }}
            asin={{ title: asin, url: sellerCentral }}
          />
        )
      },
      {
        label: "Sales",
        content: ({ sales: { value, percentage } }) => (
          <Percentage value={percentage}>
            <Currency>{value}</Currency>
          </Percentage>
        )
      },
      { label: "Orders", content: property("orders") },
      { label: "Refunds", content: property("refunds") },
      {
        label: "Profit",
        content: ({ profit: { value, percentage } }) => (
          <Percentage value={percentage}>
            <Currency>{value}</Currency>
          </Percentage>
        )
      },
      {
        label: "Margin",
        content: ({ profit: { value, percentage } }) => (
          <Percentage value={percentage}>
            <Currency>{value}</Currency>
          </Percentage>
        )
      },
      {
        label: () => "Info",
        content: () => <Menu>{[{ url: "", title: "Link to Amazon" }]}</Menu>
      },
      {
        label: () => "Details",
        content: () => (
          <Menu>
            {[
              { url: "", title: "Calculate something" },
              { url: "", title: "See charts" }
            ]}
          </Menu>
        )
      }
    ]}
    rows={rows}
  />
);
