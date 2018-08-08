import React from "react";

import Form from "components/form";
import Widget from "components/widget";
import Table from "components/table";

export const Chart = () => <p>This is a chart</p>;

export default ({ className }) => (
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
        rows={[
          { foo: "bar 1" },
          { foo: "bar 2" },
          { foo: "bar 3" },
          { foo: "bar 4" }
        ]}
        columns={[{ label: "LOL", content: ({ foo }) => foo }]}
      />
    </Widget>
  </div>
);
