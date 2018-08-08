import { namespaced } from "mutations";

export const setSales = sales => namespaced({ sales: { $set: sales } });
