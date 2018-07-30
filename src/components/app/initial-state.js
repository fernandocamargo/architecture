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
    {
      title: "Profit",
      url: "/profit",
      children: [
        { title: "Overview" },
        {
          title: "Costs",
          url: "/costs",
          children: [
            { title: "Expenses", url: "/expenses" },
            { title: "FBM", url: "/fbm" }
          ]
        },
        { title: "Profit & Loss", url: "/loss" },
        { title: "Breakdown", url: "/breakdown" },
        { title: "Returns", url: "/returns" },
        { title: "Promos", url: "/promos" },
        { title: "Global Overview", url: "/global" }
      ]
    },
    { title: "PPC Manager", url: "/ppc-manager" }
  ])
});
