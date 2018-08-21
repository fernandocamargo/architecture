import React from "react";

import Items from "components/charts/x-ray/items";
import { Generic as GenericMessages } from "i18n/messages";

export const translateFrom = ({ intl: { formatMessage } }) => ({ type }) => ({
  label: formatMessage(GenericMessages[type])
});

export const format = collection => ({
  then: translator => collection.map(item => ({ ...item, ...translator(item) }))
});

export default props => {
  const { items } = props;

  return <Items>{format(items).then(translateFrom(props))}</Items>;
};
