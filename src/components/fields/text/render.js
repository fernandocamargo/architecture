import React from "react";

export default ({ id, type, label, value, change, placeholder }) => (
  <div>
    {label && <label htmlFor={id}>{label}</label>}
    <input
      id={id}
      type={type}
      defaultValue={value}
      onChange={change}
      placeholder={placeholder}
    />
  </div>
);
