import React from "react";

import Form from "components/form";

export default ({ query, onSubmit }) => (
  <Form
    fields={[
      {
        name: "query",
        type: "text",
        label: "Query",
        value: query,
        settings: {
          placeholder: "Search for Product Title, ASIN or SKU"
        }
      }
    ]}
    onSubmit={onSubmit}
  />
);
