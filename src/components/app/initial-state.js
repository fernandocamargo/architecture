import nest from "helpers/url/nest";

export default () => ({
  menu: nest([
    { title: "Cockpit", url: "/", id: "cockpit" },
    { title: "Rankings", url: "/rankings", id: "rankings" },
    { title: "Reviews", url: "/reviews", id: "reviews" },
    { title: "Spy", url: "/spy", id: "spy" },
    { title: "Inventory", url: "/inventory", id: "inventory" },
    { title: "Profit", url: "/profit", id: "profit" },
    {
      title: "PPC Manager",
      url: "/ppc-manager",
      id: "ppc-manager",
      label: "New!"
    }
  ])
});
