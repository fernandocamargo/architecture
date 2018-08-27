import React from "react";

import forEach from "helpers/rendering/for-each";
import { Head, Body, Row } from "components/table";

export default ({ className, columns, rows }) => (
  <table className={className}>
    <Head>
      <Row>{columns}</Row>
    </Head>
    <Body>{forEach(rows).render(Row)}</Body>
  </table>
);
