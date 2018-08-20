export const change = ({ onChange }) => ({ startDate: start, endDate: end }) =>
  onChange({ start, end });
