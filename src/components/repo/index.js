import React from "react";

import Item from "components/item";

export default ({ index, liked, like, lol, ...props }) => (
  <Item {...props}>
    <dd>
      <button onClick={() => like(index)} style={{ fontSize: "1rem" }}>
        {liked ? "👍" : "👎"}
      </button>
      <pre>{JSON.stringify(lol, null, 2)}</pre>
    </dd>
  </Item>
);
