import React from "react";

import Form from "components/form";
import { Star as IconStar } from "components/icons";

export default ({ highlighted, onChange }) => (
  <Form
    fields={[
      {
        name: "highlighted",
        type: "checkbox",
        label: <IconStar />,
        value: highlighted
      }
    ]}
    onChange={onChange}
  />
);
