import loadable from "react-loadable";

import Loading from "components/loading";

export const sleep = time =>
  new Promise(resolve => window.setTimeout(resolve, time));

export const fakeLatency = component => () => sleep(1000).then(component);

export const load = promise =>
  loadable({
    loading: Loading,
    loader: promise,
    render: ({ default: component }, { connectDB, ...props }) =>
      connectDB(component).with(props)
  });

export const Login = load(() =>
  import("components/pages/login" /* webpackChunkName: "login" */)
);

export const Home = load(() =>
  import("components/pages/home" /* webpackChunkName: "home" */)
);

export const Profile = load(() =>
  import("components/pages/profile" /* webpackChunkName: "profile" */)
);

export const NotFound = load(
  fakeLatency(() =>
    import("components/pages/404" /* webpackChunkName: "404" */)
  )
);
