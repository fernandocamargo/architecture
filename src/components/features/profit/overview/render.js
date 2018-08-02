import last from "lodash/last";
import React, { Fragment } from "react";

export const getStatus = ({ output, error }) => {
  switch (true) {
    case !!output:
      return <span style={{ color: "green" }}>success</span>;
    case !!error:
      return <span style={{ color: "red" }}>fail</span>;
    default:
      return "loading...";
  }
};

export const LoggerItem = ({ path, start, finish, ...props }, key) => (
  <dl key={key} style={{ backgroundColor: key % 2 === 0 ? "#fff" : "#c9c9c9" }}>
    <dt>
      <h2>Method: {path.join(".")}();</h2>
    </dt>
    <dd>
      <small>Start: {start.toUTCString()}</small>
    </dd>
    {finish && (
      <dd>
        <small>Finish: {finish.toUTCString()}</small>
      </dd>
    )}
    <dd>Status: {getStatus(props)}</dd>
  </dl>
);

export const Logger = ({ log }) =>
  !!log.length && (
    <div style={{ border: "dotted 1px #000" }}>
      <h1>Logger:</h1>
      {log.map(LoggerItem)}
    </div>
  );

export const Button = ({
  onClick,
  children,
  lol: { loading, output, error }
}) => (
  <Fragment>
    <button onClick={onClick} disabled={loading}>
      {children} {loading && "(loading...)"}
    </button>
    {output &&
      !loading && (
        <p style={{ color: "green" }}>
          <strong>Success: {output}</strong>
        </p>
      )}
    {error &&
      !loading && (
        <p style={{ color: "red" }}>
          <strong>Error: {error}</strong>
        </p>
      )}
  </Fragment>
);

export default ({ test, listen }) => (
  <div>
    <h2>Overview</h2>
    <p>Bar chart</p>
    <p>Line chart</p>
    <p>Table</p>
    {listen({
      prop: "lol",
      method: test,
      format: last
    }).in(<Button onClick={() => test()}>Testing</Button>)}
    {listen({
      prop: "log",
      method: test
    }).in(<Logger />)}
  </div>
);
