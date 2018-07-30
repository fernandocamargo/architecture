// import loadable from "react-loadable";

// import Loading from "components/loading";

/*
export const load = promise =>
  loadable({
    loading: Loading,
    loader: promise,
    render: ({ default: component }, { connectDB, ...props }) =>
      connectDB(component).with(props)
  });
*/

// export const Overview = load(() =>
// import("components/pages/overview" /* webpackChunkName: "overview" */)
// );

// export const Costs = load(() =>
// import("components/pages/costs" /* webpackChunkName: "costs" */)
// );

// export const NotFound = load(() =>
// import("components/pages/404" /* webpackChunkName: "404" */)
// );

// export const async = promise => (...params) => promise(...params);

import loadable from "react-loadable";

import Loading from "components/loading";

export const load = loader =>
  loadable({
    loading: Loading,
    loader
  });

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
