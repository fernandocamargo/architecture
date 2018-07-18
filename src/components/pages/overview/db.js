// import * as API from "api";
import { getSales } from "mock/sales";
import { setSales } from "mutations";

export default props => ({
  load: () =>
    Promise.resolve(getSales()).then(sales => ({
      mutation: [setSales(sales)]
    }))
});
