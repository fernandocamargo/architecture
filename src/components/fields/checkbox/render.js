import React from "react";

import Field from "components/field";
import Input from "components/input";

export default ({ className, id, label, value, change }) => (
  <Field className={className}>
    <Input
      id={id}
      type="checkbox"
      value="true"
      checked={value}
      onChange={change}
    />
    {label && <label htmlFor={id}>{label}</label>}
  </Field>
);
