import random from "lodash/random";
import React from "react";

import Page from "components/page";
import Widget from "components/widget";
import { Waterfall as ChartWaterFall } from "components/charts";
import { Sales as TableSales } from "components/tables";
import Pagination from "components/pagination";
import { meta, results as sales } from "mock/sales.json";

export default () => (
  <Page title="Overview">
    <Widget>
      <ChartWaterFall
        categories={[
          { legend: { Units: 5, Orders: 5 }, value: random(250, 500) },
          { legend: { Promos: 1 }, value: -random(125, 250) },
          { legend: { Margin: "29%" } }
        ]}
      />
    </Widget>
    <Widget>
      <h2>Sales per ASIN</h2>
      <nav>
        <h4>Actions:</h4>
        <li>
          <a href="" title="Export">
            Export
          </a>
        </li>
        <li>
          <a href="" title="Edit">
            Edit
          </a>
        </li>
        <li>
          <a href="" title="Settings">
            Settings
          </a>
        </li>
      </nav>
      <TableSales rows={sales} />
      <Pagination {...meta.pagination} />
    </Widget>
  </Page>
);
