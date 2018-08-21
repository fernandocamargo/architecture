import { namespaced } from "mutations";

export const setSales = sales => namespaced({ sales: { $set: sales } });

export const setDetails = details => namespaced({ details: { $set: details } });
