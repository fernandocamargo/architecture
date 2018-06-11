import React, { Fragment, createElement } from 'react';

export const render = (component, enhancement) => (props, index) =>
  createElement(component, { ...props, ...enhancement, index, key: index });

export const Repo = ({
  index,
  name,
  description,
  url,
  liked = false,
  like,
}) => (
  <dl>
    <dt>
      <a href={url} target="_blank" title={name}>
        {name}
      </a>
    </dt>
    <dd>{description}</dd>
    <dd>
      <h3 onClick={() => like(index)}>{liked ? '👍' : '👎'}</h3>
    </dd>
  </dl>
);

export const Product = ({ name, description, url }) => (
  <dl>
    <dt>
      <a href={url} target="_blank" title={name}>
        {name}
      </a>
    </dt>
    <dd>{description}</dd>
  </dl>
);

export default ({ repos = [], products = [], toggleRepoLike }) => (
  <Fragment>
    <h1>Home();</h1>
    <section>
      <h2>Some repos</h2>
      {repos.map(render(Repo, { like: toggleRepoLike }))}
    </section>
    <section>
      <h2>Merzbow products</h2>
      {products.map(render(Product))}
    </section>
  </Fragment>
);
