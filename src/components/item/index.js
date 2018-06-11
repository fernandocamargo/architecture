import React from "react";

export default ({ name, description, url, children }) => (
  <dl>
    <dt>
      <a href={url} target="_blank" title={name}>
        {name}
      </a>
    </dt>
    <dd>{description}</dd>
    {children}
  </dl>
);
