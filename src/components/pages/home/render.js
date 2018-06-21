import React, { Fragment, createElement } from "react";

import Repo from "components/repo";
import Product from "components/product";

export const render = (component, enhancement) => (props, index) =>
  createElement(component, { ...props, ...enhancement, index, key: index });

export const last = collection => collection.slice(-1).pop();

export const Logger = props => (
  <pre
    style={{
      backgroundColor: "#000",
      color: "#fff",
      padding: "10px",
      position: "fixed",
      right: 0,
      top: 0,
      width: "40%"
    }}
  >
    {JSON.stringify(props, null, 2)}
  </pre>
);

export default ({
  repos = [],
  products = [],
  toggleRepoLike,
  removeProduct,
  testing,
  nested: {
    methods: {
      are: { here }
    }
  },
  fail,
  listen
}) => (
  <Fragment>
    <h1>Home();</h1>
    {listen([
      {
        prop: "something",
        path: ["*"]
      }
    ]).in(<Logger>{{ foo: "bar" }}</Logger>)}
    <button
      onClick={() =>
        testing("sellics", "amazon", "isaque", { foo: "bar" }, 123)
      }
    >
      Click me
    </button>
    <button onClick={() => here()}>Click me (nested)</button>
    <button onClick={() => fail()}>Fail!</button>
    <section>
      <h2>Some repos</h2>
      {repos.map(
        render(
          listen([
            {
              prop: "likeStatus",
              method: toggleRepoLike,
              params: ({ index }) => [index],
              frequency: events => last(events)
            }
          ]).in(Repo),
          { like: toggleRepoLike }
        )
      )}
    </section>
    <section>
      <h2>Merzbow products</h2>
      {products.map(
        render(
          listen([
            {
              prop: "removeStatus",
              method: removeProduct,
              params: ({ index }) => [index],
              frequency: events => last(events)
            }
          ]).in(Product),
          { remove: removeProduct }
        )
      )}
    </section>
  </Fragment>
);
