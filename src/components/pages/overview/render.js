import random from "lodash/random";
import React from "react";

import Page from "components/page";
import Widget from "components/widget";
import { Waterfall as ChartWaterFall } from "components/charts";
import { Sales as TableSales } from "components/tables";
import Pagination from "components/pagination";
import {
  Generic as GenericMessages,
  Actions as GenericActions
} from "messages";

export default ({
  intl: { formatMessage },
  sales: {
    meta: { query, pagination },
    results: sales
  },
  searchSalesBy,
  showSalesAt
}) => (
  <Page title={formatMessage(GenericMessages.overview)}>
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
      <div>
        <h2>Sales per ASIN</h2>
        <nav>
          <h4>Actions:</h4>
          <li>
            <a href="" title={formatMessage(GenericActions.export)}>
              {formatMessage(GenericActions.export)}
            </a>
          </li>
          <li>
            <a href="" title={formatMessage(GenericActions.edit)}>
              {formatMessage(GenericActions.edit)}
            </a>
          </li>
          <li>
            <a href="" title={formatMessage(GenericMessages.settings)}>
              {formatMessage(GenericMessages.settings)}
            </a>
          </li>
        </nav>
      </div>
      <div
        style={{
          border: "solid 1px #000",
          borderRadius: "10px",
          overflow: "hidden"
        }}
      >
        <TableSales
          rows={sales}
          onSort={({ column, order }) =>
            console.log("onSort();", { column, order })
          }
          onSearch={searchSalesBy}
          query={query}
        />
        <Pagination {...pagination} onPaginate={showSalesAt} />
      </div>
    </Widget>
  </Page>
);
