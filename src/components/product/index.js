import React from "react";

import Item from "components/item";

export default ({ index, remove, lol, ...props }) => (
  <Item {...props}>
    <dd>
      <button onClick={() => remove(index)} style={{ fontSize: "1rem" }}>
        <span role="img" aria-label="big red x, like in delete or remove">
          ❌
        </span>
      </button>
      <pre>{JSON.stringify(lol, null, 2)}</pre>
    </dd>
  </Item>
);
