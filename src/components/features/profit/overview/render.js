import React from "react";

export default ({
  foo: {
    bar: { zop }
  },
  test
}) => (
  <div>
    <h2>Overview</h2>
    <p>Bar chart</p>
    <p>Line chart</p>
    <p>Table</p>
    <button onClick={({ target: { innerText } }) => test(innerText)}>
      Click me!
    </button>
    <button onClick={() => zop()}>Click me (nested)!</button>
  </div>
);
