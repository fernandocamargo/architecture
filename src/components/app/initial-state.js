export const extractURLFrom = (items, base = "") => {
  return items.map(({ url = "", children = [], ...item }) => {
    const URL = base + url;

    return {
      url: URL,
      children: extractURLFrom(children, URL),
      ...item
    };
  });
};

export default () => ({
  menu: extractURLFrom([
    { title: "Cockpit", url: "/" },
    { title: "Rankings", url: "/rankings" },
    { title: "Reviews", url: "/reviews" },
    { title: "Spy", url: "/spy" },
    { title: "Inventory", url: "/inventory" },
    { title: "Profit", url: "/profit" },
    { title: "PPC Manager", url: "/ppc-manager" }
  ])
});
