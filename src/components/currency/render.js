export default ({ children }) =>
  Number(children).toLocaleString("de-DE", {
    style: "currency",
    currency: "EUR"
  });
