import React from "react";

import Widget from "components/widget";
import { Secondary as Heading } from "components/heading";
import Form from "components/form";
import Menu from "components/menu";
import TableProducts from "components/tables/products";
import Pagination from "components/pagination";
import { Generic as GenericMessages } from "i18n/messages";

export default ({
  intl: { formatMessage },
  className,
  results,
  menu,
  pagination
}) => (
  <Widget className={className}>
    <Heading>{formatMessage(GenericMessages.products)}</Heading>
    <Form />
    <Menu>{menu}</Menu>
    <TableProducts rows={results} />
    <Pagination
      {...pagination}
      onPaginate={({ page }) => console.log("onPaginate();", +page)}
    />
  </Widget>
);
