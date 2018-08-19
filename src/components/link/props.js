export default props => {
  const { isActive, to, history } = props;

  return {
    isActive: !!isActive ? isActive(to) : (match, { pathname }) => !!match,
    goTo: () => history.push(to)
  };
};
