import React from "react";

export default ({
  foo: {
    bar: { zop }
  },
  test,
  fail,
  delayed
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
    <button onClick={() => fail()}>Failing...</button>
    <button onClick={() => delayed()}>Delayed...</button>
  </div>
);

