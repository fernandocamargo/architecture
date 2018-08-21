import parse from "helpers/request/parse";

import { setDetails, setSales } from "./mutations";

export const fetch = url => window.fetch(url).then(parse);

export default props => ({
  load: () =>
    Promise.all([fetch("/profit/sales/"), fetch("/profit/details/")]).then(
      ([sales, details]) => ({
        mutation: [setDetails(details), setSales(sales)]
      })
    )
});
