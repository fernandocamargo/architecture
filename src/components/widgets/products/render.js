import React from "react";

import Widget from "components/widget";
import { Secondary as Heading } from "components/heading";
import Form from "components/form";
import Menu from "components/menu";
import Table from "components/tables/products";
import Pagination from "components/pagination";
import { Generic as GenericMessages } from "i18n/messages";

export default ({
  intl: { formatMessage },
  className,
  results,
  menu,
  pagination,
  paginate
}) => (
  <Widget className={className}>
    <Heading>{formatMessage(GenericMessages.products)}</Heading>
    <Form />
    <Menu title={`${formatMessage(GenericMessages.actions)}:`}>{menu}</Menu>
    <Table rows={results} />
    <Pagination {...pagination} onPaginate={paginate} />
  </Widget>
);
