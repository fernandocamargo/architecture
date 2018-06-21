import React, { Fragment, createElement } from 'react';

import Repo from 'components/repo';
import Product from 'components/product';

export const render = (component, enhancement) => (props, index) =>
  createElement(component, { ...props, ...enhancement, index, key: index });

export default ({
  repos = [],
  products = [],
  toggleRepoLike,
  removeProduct,
  testing,
  nested: { methods: { are: { here } } },
  fail,
  listen,
}) => (
  <Fragment>
    <h1>Home();</h1>
    <button
      onClick={() =>
        testing('sellics', 'amazon', 'isaque', { foo: 'bar' }, 123)
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
              method: toggleRepoLike,
              params: ({ index }) => [index],
              prop: 'lol',
            },
          ]).in(Repo),
          { like: toggleRepoLike },
        ),
      )}
    </section>
    <section>
      <h2>Merzbow products</h2>
      {products.map(
        render(
          listen([
            {
              method: removeProduct,
              params: ({ index }) => [index],
              prop: 'lol',
            },
          ]).in(Product),
          { remove: removeProduct },
        ),
      )}
    </section>
  </Fragment>
);
