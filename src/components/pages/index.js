import loadable from "react-loadable";

import Loading from "components/loading";

export const load = promise =>
  loadable({
    loading: Loading,
    loader: promise,
    render: ({ default: component }, { connectDB, ...props }) =>
      connectDB(component).with(props)
  });

export const Overview = load(() =>
  import("components/pages/overview" /* webpackChunkName: "overview" */)
);

export const Costs = load(() =>
  import("components/pages/costs" /* webpackChunkName: "costs" */)
);

export const NotFound = load(() =>
  import("components/pages/404" /* webpackChunkName: "404" */)
);
