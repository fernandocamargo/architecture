import { compose, withHandlers } from "recompose";

import setStatics from "helpers/rendering/statics/set";

import * as statics from "./statics";

export default compose(
  setStatics(statics),
  withHandlers({
    move: ({ current, total, onPaginate }) => direction => event => {
      const target = current + direction;
      const page = Math.min(Math.max(target, 1), total);

      event.preventDefault();
      onPaginate({ page });
    }
  })
);
