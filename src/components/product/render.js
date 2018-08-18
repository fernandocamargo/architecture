import React from "react";

export default ({ name, asin, sku }) => (
  <blockquote>
    <dl>
      <dt>Product name</dt>
      <dd>{name}</dd>
    </dl>
    <dl>
      <dt>ASIN</dt>
      <dd>
        <a href={asin.url} title={asin.title} target="_blank">
          {asin.title}
        </a>
      </dd>
    </dl>
    <dl>
      <dt>Sku</dt>
      <dd>
        <a href={sku.url} title={sku.title} target="_blank">
          {sku.title}
        </a>
      </dd>
    </dl>
  </blockquote>
);
