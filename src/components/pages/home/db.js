import * as API from "api";
import {
  setRepos,
  setProducts,
  toggleRepoLikedByIndex,
  setTesting,
  setNested
} from "mutations";

export default props => ({
  load: () =>
    Promise.all([
      API.getGithubRepos(),
      API.searchItunesContentFor("Merzbow")
    ]).then(([repos, products]) => [setRepos(repos), setProducts(products)]),
  toggleRepoLike: index =>
    new Promise(resolve =>
      window.setTimeout(() => resolve(toggleRepoLikedByIndex(index)), 1000)
    ),
  testing: (...params) => Promise.resolve(setTesting(params)),
  nested: {
    methods: {
      are: {
        here: () => Promise.resolve(setNested())
      }
    }
  },
  fail: () =>
    new Promise((resolve, reject) =>
      window.setTimeout(
        () => reject({ code: 404, reason: "Something went wrong" }),
        1000
      )
    )
});
