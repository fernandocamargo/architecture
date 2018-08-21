import React from "react";

import Items from "components/charts/x-ray/items";

export default ({ label, value, percentage, details }) => (
  <dl>
    <dt>
      <strong>{label}</strong>
    </dt>
    <dt>
      <span>Value: </span>
      <em>{value}</em>
    </dt>
    <dt>
      <span>Percentage: </span>
      <em>{percentage}%</em>
    </dt>
    <dd>
      <Items>{details}</Items>
    </dd>
  </dl>
);
