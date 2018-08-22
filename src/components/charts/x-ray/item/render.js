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
      <strong title={formatMessage(GenericMessages[type])}>
        {formatMessage(GenericMessages[type])}
      </strong>
    </Title>
    <Title>
      <span>{formatMessage(GenericMessages.value)}: </span>
      <em>{value}</em>
    </Title>
    <Title>
      <span>{formatMessage(GenericMessages.percentage)}: </span>
      <em>{percentage}%</em>
    </Title>
    {!!details.length && (
      <Description>
        <Items>{details}</Items>
      </Description>
    )}
  </Definition>
);
