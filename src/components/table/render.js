import React from "react";

import forEach from "helpers/rendering/for-each";

export const Row = ({ children }) => <tr>{forEach(children).render(Cell)}</tr>;

export const Cell = ({ children }) => <td>{children}</td>;

export default ({ columns, rows }) => (
  <table border="1">
    <thead>
      <Row>{columns}</Row>
    </thead>
    <tbody>{forEach(rows).render(Row)}</tbody>
  </table>
);
