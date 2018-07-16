import React from "react";

export default ({ original, zoomed }) => (
  <a href={zoomed} target="_blank">
    <img src={original} alt="Click to zoom" title="Click to zoom" />
  </a>
);
