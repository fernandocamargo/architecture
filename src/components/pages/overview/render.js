import random from "lodash/random";
import React from "react";

import Page from "components/page";
import Widget from "components/widget";
import { Waterfall as ChartWaterFall } from "components/charts";
import { Sales as TableSales } from "components/tables";
import Pagination from "components/pagination";

export default ({ sales: { meta, results: sales } }) => (
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
      <TableSales
        rows={sales}
        onSort={({ column, order }) =>
          console.log("onSort();", { column, order })
        }
        onSearch={({ query }) => console.log("onSearch();", { query })}
      />
      <Pagination
        {...meta.pagination}
        onPaginate={({ page }) => console.log("onPaginate();", { page })}
      />
    </Widget>
  </Page>
);
