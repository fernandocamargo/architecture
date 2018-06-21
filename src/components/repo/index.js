import React from "react";

import Item from "components/item";

export default ({ index, liked, like, likeStatus = {}, ...props }) => (
  <Item {...props}>
    <dd>
      <button
        onClick={() => like(index)}
        style={{ cursor: "pointer", fontSize: "1rem" }}
        disabled={likeStatus.loading}
      >
        {liked ? "👍" : "👎"}
        {likeStatus.loading && " loading..."}
      </button>
    </dd>
  </Item>
);
