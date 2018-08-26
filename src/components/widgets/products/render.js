import React from "react";

import Widget from "components/widget";
import Form from "components/form";
import Menu from "components/menu";
import TableProducts from "components/tables/products";
import Pagination from "components/pagination";

export default ({ results, pagination }) => (
  <Widget>
    <h3>Products</h3>
    <Form />
    <Menu>
      {[
        { url: "", title: "Export" },
        { url: "", title: "Edit" },
        { url: "", title: "Settings" }
      ]}
    </Menu>
    <TableProducts rows={results} />
    <Pagination
      {...pagination}
      onPaginate={({ page }) => console.log("onPaginate();", +page)}
    />
  </Widget>
);
