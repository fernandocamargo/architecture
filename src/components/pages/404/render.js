import React from "react";

import Page from "components/page";
import Widget from "components/widget";
import { Generic as GenericMessages } from "i18n/messages";

export default ({ intl: { formatMessage } }) => (
  <Page title={formatMessage(GenericMessages["not-found"])}>
    <Widget>
      <h1>{formatMessage(GenericMessages["not-found"])}</h1>
    </Widget>
  </Page>
);
