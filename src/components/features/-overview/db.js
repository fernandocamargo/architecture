import { getSales } from "mock/sales";
import { setSales } from "mutations";

export const saveSales = sales => ({ mutation: [setSales(sales)] });

export const async = (...params) => Promise.resolve(...params);

export default props => ({
  load: () => async(getSales()).then(saveSales),
  searchSalesBy: ({ query }) => async(getSales({ query })).then(saveSales),
  showSalesAt: ({ page }) => async(getSales({ page })).then(saveSales)
});
