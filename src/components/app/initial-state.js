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
    { title: "Cockpit", url: "/", id: "home" },
    { title: "Rankings", url: "/rankings", id: "rankings" },
    { title: "Reviews", url: "/reviews", id: "reviews" },
    { title: "Spy", url: "/spy", id: "spy" },
    { title: "Inventory", url: "/inventory", id: "inventory" },
    { title: "Profit", url: "/profit", id: "profit" },
    { title: "PPC Manager", url: "/ppc-manager", id: "ppc-manager" }
  ])
});
