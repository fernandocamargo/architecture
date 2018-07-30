import load from "helpers/rendering/load";

export { default } from "components/features/profit/container";

export const Overview = load(() =>
  import("components/features/profit/overview" /* webpackChunkName: "profit/overview" */)
);

export const Costs = load(() =>
  import("components/features/profit/costs" /* webpackChunkName: "profit/costs" */)
);
