import React from "react";

import Items from "components/charts/x-ray/items";
import { Generic as GenericMessages } from "i18n/messages";

export default ({
  intl: { formatMessage },
  type,
  value,
  percentage,
  details
}) => (
  <dl>
    <dt>
      <strong>{formatMessage(GenericMessages[type])}</strong>
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
