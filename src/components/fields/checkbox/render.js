import React from "react";

export default ({ value, onChange }) => (
  <div>
    <input type="checkbox" value="true" checked={value} onChange={onChange} />
  </div>
);
