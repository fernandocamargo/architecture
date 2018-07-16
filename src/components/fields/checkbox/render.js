import React from "react";

export default ({ id, label, value, change }) => (
  <div>
    <input
      id={id}
      type="checkbox"
      value="true"
      checked={value}
      onChange={change}
    />
    {label && <label htmlFor={id}>{label}</label>}
  </div>
);
