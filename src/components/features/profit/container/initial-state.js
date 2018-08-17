import nest from "helpers/url/nest";

export default () => ({
  menu: nest([
    { title: "Overview", url: "/profit", id: "overview" },
    { title: "Costs", url: "/profit/costs", id: "costs" },
    { title: "Profit & Loss", url: "/profit/loss", id: "loss" },
    { title: "Breakdown", url: "/profit/breakdown", id: "breakdown" },
    { title: "Returns", url: "/profit/returns", id: "returns" },
    { title: "Promos", url: "/profit/promos", id: "promos" },
    {
      title: "Global Overview",
      url: "/profit/global-overview",
      id: "global-overview"
    }
  ])
});
