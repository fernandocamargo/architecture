import React from "react";

import Form from "components/form";
import { Tertiary as Heading } from "components/heading";
import Plain, { Strong } from "components/text";
import Menu from "components/menu";
import {
  Pagination as PaginationMessages,
  Generic as GenericMessages
} from "i18n/messages";

export default ({
  intl: { formatMessage },
  className,
  total,
  menu,
  current,
  onPaginate
}) => (
  <div className={className}>
    <Heading>
      <Plain>{formatMessage(PaginationMessages.total)} </Plain>
      <Strong>{total}</Strong>
    </Heading>
    <Menu title={`${formatMessage(GenericMessages.actions)}:`}>{menu}</Menu>
    <Form
      fields={[
        {
          type: "text",
          name: "page",
          value: current
        }
      ]}
      onSubmit={onPaginate}
    />
  </div>
);
