import React from "react";

import Form from "components/form";
import Widget from "components/widget";
import Table from "components/table";

export const Chart = () => <p>This is a chart</p>;

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
          { label: "ASIN", content: ({ asin }) => asin }
        ]}
      />
    </Widget>
  </div>
);
