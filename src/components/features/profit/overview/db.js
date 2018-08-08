import parse from "helpers/request/parse";

import { setSales } from "./mutations";

export default props => ({
  load: () =>
    window
      .fetch("/profit/sales/")
      .then(parse)
      .then(sales => ({ mutation: setSales(sales) }))
});
