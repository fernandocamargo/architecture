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
    { title: "Overview", url: "/profit" },
    { title: "Costs", url: "/profit/costs" },
    { title: "Profit & Loss", url: "/profit/loss" },
    { title: "Breakdown", url: "/profit/breakdown" },
    { title: "Returns", url: "/profit/returns" },
    { title: "Promos", url: "/profit/promos" },
    { title: "Global Overview", url: "/profit/global-overview" }
  ])
});
