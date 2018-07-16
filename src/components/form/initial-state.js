export const registerFieldInState = (stack, { name, value }) =>
  Object.assign(stack, {
    [name]: value
  });

export default ({ fields }) => ({
  data: fields.reduce(registerFieldInState, {}),
  original: false,
  debugging: false
});

