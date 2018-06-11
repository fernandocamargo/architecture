import React from "react";

import Item from "components/item";

export default ({ index, liked = false, like, ...props }) => (
  <Item {...props}>
    <dd>
      <h3 onClick={() => like(index)}>{liked ? "👍" : "👎"}</h3>
    </dd>
  </Item>
);
