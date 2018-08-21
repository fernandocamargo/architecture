import first from "lodash/first";

export const updateFrom = reference => item => {
  const value = item.hasOwnProperty("value")
    ? item.value
    : reference * (item.percentage / 100);
  const percentage = item.hasOwnProperty("percentage")
    ? item.percentage
    : Math.abs((item.value * 100) / reference);
  const details = item.hasOwnProperty("details")
    ? iterate(item.details).from(item.value)
    : item.details;

  return {
    ...item,
    value,
    percentage,
    details
  };
};

export const iterate = collection => ({
  from: reference => collection.map(updateFrom(reference))
});

export const empty = () => ({ value: 0 });

export default ({ data }) => {
  const { value } = first(data) || empty();

  return { items: iterate(data).from(value) };
};
