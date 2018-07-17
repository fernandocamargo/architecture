import React, { Fragment } from "react";

import Table from "components/table";
import { Star as IconStar } from "components/icons";
import { Highlight as FormHighlight } from "components/forms";
import { ProductSearch as FormProductSearch } from "components/forms";
import Zoom from "components/zoom";
import Currency from "components/currency";

export const getColumns = () => [
  {
    identity: "starred",
    label: <IconStar />,
    content: ({ item: { starred } }) => (
      <FormHighlight
        highlighted={starred}
        onChange={data => console.log("FormHighlight.onChange();", data)}
      />
    )
  },
  {
    identity: "product",
    label: ({ sorter }) => (
      <Fragment>
        <span>Product</span>
        {sorter}
        <FormProductSearch
          onSubmit={data => console.log("FormProductSearch.onSubmit();", data)}
        />
      </Fragment>
    ),
    content: ({
      item: { productName, customName },
      links: { amazon, sellerCentral },
      images: { thumbnail, medium },
      pk: { sku },
      asin
    }) => (
      <Fragment>
        <Zoom original={thumbnail} zoomed={medium} />
        <dl>
          <dt>{customName || productName}</dt>
          <dd>
            <dl>
              <dt>Amazon</dt>
              <dd>
                <a href={amazon} title="Go to Amazon" target="_blank">
                  {asin}
                </a>
              </dd>
            </dl>
            <dl>
              <dt>Amazon Seller Central</dt>
              <dd>
                <a
                  href={sellerCentral}
                  title="Go to Amazon Seller Central"
                  target="_blank"
                >
                  {sku}
                </a>
              </dd>
            </dl>
          </dd>
        </dl>
      </Fragment>
    )
  },
  {
    identity: "sales",
    label: "Sales",
    content: ({ itemPrice }) => <Currency>{itemPrice}</Currency>
  },
  {
    identity: "units",
    label: "Units",
    content: ({ quantity }) => quantity
  },
  {
    identity: "promos",
    label: "Promos",
    content: ({ promos }) => promos
  },
  {
    identity: "profit",
    label: "Profit",
    content: ({ profit }) => <Currency>{profit}</Currency>
  },
  {
    identity: "margin",
    label: "Margin",
    content: ({ margin }) => <Currency>{margin}</Currency>
  }
];

export default ({ rows }) => (
  <Table columns={getColumns()} rows={rows}>
    {({ variations }) => <Table columns={getColumns()} rows={variations} />}
  </Table>
);