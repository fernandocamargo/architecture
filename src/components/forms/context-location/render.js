import moment from "moment";
import React from "react";

import Form from "components/form";
import { Languages as LanguagesMessages } from "i18n/messages";

export const timeline = {
  today: moment(),
  yesterday: moment().subtract(1, "day")
};

export default ({ intl: { formatMessage }, className, onChange }) => (
  <Form
    fields={[
      {
        name: "context-location",
        type: "checkbox",
        label: formatMessage(LanguagesMessages.de),
        value: true
      },
      {
        name: "date-range",
        type: "dateRange",
        value: {
          start: timeline.today,
          end: timeline.today
        },
        settings: {
          presets: [
            {
              text: "Today",
              start: timeline.today,
              end: timeline.today
            },
            {
              text: "Yesterday",
              start: timeline.yesterday,
              end: timeline.yesterday
            }
          ]
        }
      }
    ]}
    className={className}
    onChange={onChange}
    title="Filter your results:"
  />
);
