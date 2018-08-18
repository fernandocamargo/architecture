import property from "lodash/property";
import React, { Fragment } from "react";

import Form from "components/form";
import Widget from "components/widget";
import Menu from "components/menu";
import Currency from "components/currency";
import Percentage from "components/percentage";
import Table from "components/table";
import Product from "components/product";
import Pagination from "components/pagination";

export const Chart = () => <p>This is a chart</p>;

export default ({ className, sales }) => (
  <div className={className}>
    <Widget>
      <Form
        fields={[
          {
            name: "context-region",
            type: "checkbox",
            label: "DE",
            value: true
          }
        ]}
      />
    </Widget>
    <Widget>
      <Chart />
    </Widget>
    <Widget>
      <Chart />
    </Widget>
    <Widget>
      <div>
        <h3>Products</h3>
        <Form />
        <Menu>
          {[
            { url: "", title: "Export" },
            { url: "", title: "Edit" },
            { url: "", title: "Settings" }
          ]}
        </Menu>
        <Table
          rows={sales.results}
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
              content: () => (
                <Menu>{[{ url: "", title: "Link to Amazon" }]}</Menu>
              )
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
        />
        <Pagination
          {...sales.meta.pagination}
          onPaginate={({ page }) => console.log("onPaginate();", +page)}
        />
      </div>
    </Widget>
  </div>
);
