import last from "lodash/last";
import random from "lodash/random";
import React, { Fragment } from "react";

export const prevent = callback => event =>
  event.preventDefault() || callback(event);

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

export const LoggerItem = ({ path, start, finish, dismiss, ...props }) => (
  <dl
    style={{
      backgroundColor: "#fff",
      border: "dotted 1px #000",
      margin: "1rem",
      padding: "1rem"
    }}
  >
    <dt>
      <h2>Method: {path.join(".")}();</h2>
    </dt>
    <dd>
      <small>Start: {start.toUTCString()}</small>
    </dd>
    {!!finish && (
      <dd>
        <small>Finish: {finish.toUTCString()}</small>
      </dd>
    )}
    <dd>Status: {getStatus(props)}</dd>
    {!!dismiss && (
      <dd>
        <a href="" title="Dismiss" onClick={prevent(dismiss)}>
          Dismiss
        </a>
      </dd>
    )}
  </dl>
);

export const Logger = ({ title, log }) =>
  !!log.length && (
    <div style={{ border: "dotted 1px #000" }}>
      <h1>{title}</h1>
      {log.map((item, key) => <LoggerItem key={key} {...item} />)}
    </div>
  );

export const stringify = object =>
  typeof object === "string" ? object : JSON.stringify(object, null, 2);

export const Button = ({
  onClick,
  children,
  lol: { loading, output, error }
}) => (
  <Fragment>
    <button onClick={onClick} disabled={loading}>
      {children} {loading && "(loading...)"}
    </button>
    {!!output &&
      !loading && (
        <p style={{ color: "green" }}>
          <strong>Success: {stringify(output)}</strong>
        </p>
      )}
    {!!error &&
      !loading && (
        <p style={{ color: "red" }}>
          <strong>Error: {stringify(error)}</strong>
        </p>
      )}
    {!!loading && <p>Loading...</p>}
  </Fragment>
);

export const Props = props => <pre>{JSON.stringify(props, null, 2)}</pre>;

export default ({
  test,
  Listen,
  a: {
    b: {
      c: { d, e, f },
      g,
      h,
      i
    }
  }
}) => (
  <Fragment>
    <h2>Overview</h2>
    <p>Bar chart</p>
    <p>Line chart</p>
    <p>Table</p>
    <Listen to={test} as="lol" format={last}>
      <Props />
      <Button onClick={() => test()}>Testing</Button>
    </Listen>
    <Listen to={test} as="log">
      <Logger title="Listening to test();" />
    </Listen>
    <Listen to={"a"} as="log">
      <Logger title="Listening to namespace" />
    </Listen>
    <table>
      <tbody>
        <tr>
          <td>
            <button onClick={() => d(1)}>D</button>
          </td>
          <td>
            <button onClick={() => e(2)}>E</button>
          </td>
          <td>
            <button onClick={() => f(3)}>F</button>
          </td>
        </tr>
        <tr>
          <td>
            <button onClick={() => g(1)}>G</button>
          </td>
          <td>
            <button onClick={() => h(2)}>H</button>
          </td>
          <td>
            <button onClick={() => i(random(1, 10))}>I</button>
          </td>
        </tr>
      </tbody>
    </table>
  </Fragment>
);
