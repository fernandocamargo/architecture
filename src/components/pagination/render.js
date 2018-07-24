import React from "react";

import Form from "components/form";

export default ({ current, total, move, onPaginate }) => (
  <div>
    <pre style={{ fontSize: "2rem" }}>{JSON.stringify({ current })}</pre>
    <h3>
      <span>Total of pages</span> <strong>{total}</strong>
    </h3>
    <nav>
      <h4>Browse through:</h4>
      <ul>
        <li>
          <a href="" title="Previous page" onClick={move(-1)}>
            Previous page
          </a>
        </li>
        <li>
          <a href="" title="Next page" onClick={move(+1)}>
            Next page
          </a>
        </li>
      </ul>
    </nav>
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
