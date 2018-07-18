import React, { Fragment } from "react";

import Table from "components/table";
import { Star as IconStar } from "components/icons";
import { Highlight as FormHighlight } from "components/forms";
import { ProductSearch as FormProductSearch } from "components/forms";
import Zoom from "components/zoom";
import Currency from "components/currency";

export const getColumnsFrom = ({ query, onSearch }) => [
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
        <FormProductSearch query={query} onSubmit={onSearch} />
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
    identity: "orders",
    label: "Orders",
    content: ({ orders }) => orders
  },
  {
    identity: "refunds",
    label: "Refunds",
    content: ({ refunds }) => refunds
  },
  {
    identity: "profit",
    label: "Profit ($)",
    content: ({ profit }) => <Currency>{profit}</Currency>
  },
  {
    identity: "margin",
    label: "Margin (%)",
    content: ({ margin }) => <Currency>{margin}</Currency>
  },
  {
    identity: "amazon-link",
    label: () => <i>Info</i>,
    content: ({ links: { amazon } }) => (
      <a href={amazon} title="Link to Amazon">
        Link to Amazon
      </a>
    )
  },
  {
    identity: "details",
    label: () => "Details",
    content: () => (
      <Fragment>
        <button>Calculator</button>
        <button>Chart</button>
      </Fragment>
    )
  }
];

export default props => {
  const { rows } = props;

  return <Table columns={getColumnsFrom(props)} rows={rows} />;
};
