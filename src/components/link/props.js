export const VALID = ["aria-", "data-"];

export const startsWith = name => prefix =>
  String(name).substring(0, String(prefix).length) === String(prefix);

export const validate = key => !!VALID.filter(startsWith(key)).length;

export const getAttributesFrom = props =>
  Object.entries(props).reduce(
    (stack, [key, value]) =>
      !validate(key) ? stack : Object.assign(stack, { [key]: value }),
    {}
  );

export default props => {
  const { to, history } = props;

  return {
    attributes: getAttributesFrom(props),
    goTo: () => history.push(to)
  };
};
