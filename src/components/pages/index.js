export const sleep = time =>
  new Promise(resolve => window.setTimeout(resolve, time));

export const fakeLatency = component => () => sleep(1000).then(component);

export const Login = () =>
  import('components/pages/login' /* webpackChunkName: "login" */);

export const Home = () =>
  import('components/pages/home' /* webpackChunkName: "home" */);

export const Profile = () =>
  import('components/pages/profile' /* webpackChunkName: "profile" */);

export const NotFound = fakeLatency(() =>
  import('components/pages/404' /* webpackChunkName: "404" */),
);
