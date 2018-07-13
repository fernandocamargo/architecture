import React from "react";

import Page from "components/page";
import Widget from "components/widget";
import { Costs as TableCosts } from "components/tables";
import products from "mock/products.json";

export default () => (
  <Page title="Costs">
    <Widget>
      <h2>Sales per ASIN</h2>
      <TableCosts rows={products} />
    </Widget>
  </Page>
);
