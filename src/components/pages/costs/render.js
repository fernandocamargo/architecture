import React from "react";

import Page from "components/page";
import Widget from "components/widget";
import { Costs as TableCosts } from "components/tables";
import costs from "mock/costs.json";

export default () => (
  <Page title="Costs">
    <Widget>
      <TableCosts rows={costs} />
    </Widget>
  </Page>
);
