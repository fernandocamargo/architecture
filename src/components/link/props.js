import isString from "lodash/isString";

export default props => {
  const { isActive, to, history } = props;

  return {
    ...(!!isActive && { isActive: isActive(to) }),
    to: isString(to) ? to : "",
    goTo: () => history.push(to)
  };
};
