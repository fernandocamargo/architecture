import noop from "lodash/noop";

export { default as DB } from "./db";

export const displayName = "Pages/Overview";

export const propTypes = {};

export const defaultProps = {
  sales: {
    meta: {
      pagination: {
        total: 0,
        current: 0,
        itemsPerPage: 0
      },
      query: ""
    },
    results: []
  },
  searchSalesBy: noop
};
