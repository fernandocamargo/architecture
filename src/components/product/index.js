import React from "react";

import Item from "components/item";

export default ({ index, remove, removeStatus, ...props }) => (
  <Item {...props}>
    <dd>
      <button onClick={() => remove(index)} style={{ fontSize: "1rem" }}>
        <span role="img" aria-label="big red x, like in delete or remove">
          ❌
        </span>
      </button>
      <pre>{JSON.stringify(removeStatus, null, 2)}</pre>
    </dd>
  </Item>
);
