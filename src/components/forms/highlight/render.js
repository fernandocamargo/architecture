import React from "react";

import Form from "components/form";

export default ({ highlighted, onChange }) => (
  <Form
    fields={[
      {
        name: "highlighted",
        type: "checkbox",
        value: highlighted
      }
    ]}
    onChange={onChange}
  />
);
