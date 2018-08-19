export const change = ({ onChange }) => ({ target: { checked } }) =>
  onChange(checked);
