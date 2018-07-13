import React, { Fragment } from "react";

import Table from "components/table";
import Form from "components/form";

export const FavoriteIcon = ({ active = true }) => (
  <span>{active ? "★" : "☆"}</span>
);

export const ExternalLinkIcon = () => (
  <img
    src="https://upload.wikimedia.org/wikipedia/commons/6/64/Icon_External_Link.png"
    alt="External link"
    title="External link"
  />
);

export const currency = value =>
  Number(value).toLocaleString("de-DE", {
    style: "currency",
    currency: "EUR"
  });

export const editableCurrency = value => Number(value).toFixed(2);

export const shipping = ({ fulfillmentChannel, shippingPrice }) => {
  switch (true) {
    case fulfillmentChannel === "A":
      return "FBA";
    case fulfillmentChannel === "M" && shippingPrice > 0:
      return currency(shippingPrice);
    default:
      return shippingPrice;
  }
};

export const product = ({
  item: { productName, customName },
  pk: { sku },
  asin
}) => (
  <Fragment>
    <h3>{customName || productName}</h3>
    <dl>
      <dt>ASIN</dt>
      <dd>
        <a href="" title="">
          {asin} <ExternalLinkIcon />
        </a>
      </dd>
    </dl>
    <dl>
      <dt>SKU</dt>
      <dd>
        <a href="" title="">
          {sku} <ExternalLinkIcon />
        </a>
      </dd>
    </dl>
  </Fragment>
);

export const favorite = ({
  asin,
  item: { starred, productName, customName }
}) => (
  <a
    href=""
    title={`Set product "${customName || productName}" as favorite`}
    onClick={event => {
      event.preventDefault();
      console.log({ asin });
    }}
  >
    <FavoriteIcon active={starred} />
  </a>
);

export default ({ rows }) => (
  <Table
    columns={[
      {
        key: "favorite",
        label: <FavoriteIcon />,
        content: favorite
      },
      {
        key: "title",
        label: "Title",
        content: product
      },
      {
        key: "price",
        label: "Price",
        content: ({ itemPrice }) => currency(itemPrice)
      },
      {
        key: "shipping",
        label: "Shipping",
        content: shipping
      },
      {
        key: "net",
        label: "Net",
        content: ({ itemPrice }) => currency(itemPrice)
      },
      {
        key: "cost-of-goods",
        label: "Cost of goods",
        content: ({ itemCostAbs }) => (
          <Form
            placeholder="input"
            value={!!itemCostAbs ? editableCurrency(itemCostAbs) : ""}
          />
        )
      },
      {
        key: "shipping-costs",
        label: "Shipping Costs",
        content: ({ shippingCostAbs }) => (
          <Form
            placeholder="input"
            value={!!shippingCostAbs ? editableCurrency(shippingCostAbs) : ""}
          />
        )
      },
      {
        key: "amazon-fees",
        label: "Amazon Fees",
        content: ({ amazonFeesAbs }) => currency(amazonFeesAbs)
      },
      {
        key: "fba-fees",
        label: "FBA Fees",
        content: ({ fbaFeesAbs }) => currency(fbaFeesAbs)
      },
      {
        key: "total-costs",
        label: "Total Costs",
        content: ({ totalCostsAbs }) => currency(totalCostsAbs)
      }
    ]}
    rows={rows}
  />
);
