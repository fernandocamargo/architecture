import React from "react";

import Form from "components/form";
import { Languages as LanguagesMessages } from "i18n/messages";

export default ({ intl: { formatMessage }, className }) => (
  <div className={className}>
    <Form
      fields={[
        {
          name: "context-local",
          type: "checkbox",
          label: formatMessage(LanguagesMessages.de),
          value: true
        }
      ]}
    />
  </div>
);
