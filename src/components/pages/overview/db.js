/*
https://images-eu.ssl-images-amazon.com/images/P/#{e.asin}.00-#{e.sellerId}.THUMB.jpg
https://images-eu.ssl-images-amazon.com/images/P/#{e.asin}.00-#{e.sellerId}.SCM.jpg
http://www.#{globalMarketSwitch.getMarketplaces().get(0).domain.host}/gp/product/#{e.asin}
*/

import * as API from "api";
import {
  setRepos,
  setProducts,
  toggleRepoLikedByIndex,
  removeProduct,
  setTesting,
  setNested
} from "mutations";

export default props => ({
  load: () =>
    Promise.all([
      API.getGithubRepos(),
      API.searchItunesContentFor("Merzbow")
    ]).then(([repos, products]) => ({
      mutation: [setRepos(repos), setProducts(products)]
    })),
  toggleRepoLike: index =>
    new Promise(resolve =>
      window.setTimeout(
        () => resolve({ mutation: toggleRepoLikedByIndex(index) }),
        1000
      )
    ),
  removeProduct: index =>
    new Promise(resolve =>
      window.setTimeout(() => resolve({ mutation: removeProduct(index) }), 1000)
    ),
  testing: (...params) => Promise.resolve({ mutation: setTesting(params) }),
  nested: {
    methods: {
      are: {
        here: () => Promise.resolve({ mutation: setNested() })
      }
    }
  },
  fail: () =>
    new Promise((resolve, reject) =>
      window.setTimeout(
        () => reject({ error: { code: 404, reason: "Something went wrong" } }),
        1000
      )
    )
});
