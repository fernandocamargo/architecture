import load from "helpers/rendering/load";

export const Cockpit = load(() =>
  import("components/features/cockpit" /* webpackChunkName: "cockpit" */)
);

export const Inventory = load(() =>
  import("components/features/inventory" /* webpackChunkName: "inventory" */)
);

export const PPCManager = load(() =>
  import("components/features/ppc-manager" /* webpackChunkName: "ppc-manager" */)
);

export const Profit = load(() =>
  import("components/features/profit" /* webpackChunkName: "profit" */)
);

export const Rankings = load(() =>
  import("components/features/rankings" /* webpackChunkName: "rankings" */)
);

export const Reviews = load(() =>
  import("components/features/reviews" /* webpackChunkName: "reviews" */)
);

export const Spy = load(() =>
  import("components/features/spy" /* webpackChunkName: "spy" */)
);
