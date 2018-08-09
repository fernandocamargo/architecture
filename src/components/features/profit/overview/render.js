import property from "lodash/property";
import React, { Fragment } from "react";

import Form from "components/form";
import Widget from "components/widget";
import Table from "components/table";

export const Chart = () => <p>This is a chart</p>;

export const Currency = ({ children }) => children;

export const Percentage = ({ children }) => children;

export default ({ className, sales }) => (
  <div className={className}>
    <Form />
    <Widget>
      <Chart />
    </Widget>
    <Widget>
      <Chart />
    </Widget>
    <Widget>
      <Table
        rows={sales.results}
        columns={[
          { label: () => "starred", content: ({ starred }) => String(starred) },
          { label: "ASIN", content: ({ asin }) => asin },
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
            label: () => "Details",
            content: () => (
              <Fragment>
                <a href="" title="Link to Amazon">
                  Amazon
                </a>
                <a href="" title="Calculate something">
                  Calculator
                </a>
                <a href="" title="See charts">
                  Charts
                </a>
              </Fragment>
            )
          }
        ]}
      />
    </Widget>
  </div>
);
