export default set => ({
  with: subset =>
    String(set).substr(0, String(subset).length) === String(subset)
});
