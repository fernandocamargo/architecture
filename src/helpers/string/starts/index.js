import stringify from "helpers/object/stringify";

export default set => ({
  with: value => {
    const subset = stringify(value);

    return stringify(set).substr(0, subset.length) === subset;
  }
});
