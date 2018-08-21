import React from "react";

import Definition, { Title, Description } from "components/definition";
import Items from "components/charts/x-ray/items";
import { Generic as GenericMessages } from "i18n/messages";

export default ({
  intl: { formatMessage },
  type,
  value,
  percentage,
  details
}) => (
  <Definition>
    <Title>
      <strong>{formatMessage(GenericMessages[type])}</strong>
    </Title>
    <Title>
      <span>Value: </span>
      <em>{value}</em>
    </Title>
    <Title>
      <span>Percentage: </span>
      <em>{percentage}%</em>
    </Title>
    <Description>
      <Items>{details}</Items>
    </Description>
  </Definition>
);
