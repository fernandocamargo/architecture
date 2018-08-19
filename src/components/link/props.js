export default props => {
  const { isActive, to, history } = props;

  return {
    ...(!!isActive && { isActive: isActive(to) }),
    goTo: () => history.push(to)
  };
};
