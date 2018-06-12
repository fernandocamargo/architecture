export const setRepos = repos => ({
  repos: { $set: repos }
});

export const setProducts = products => ({
  products: { $set: products }
});

export const toggleRepoLikedByIndex = index => ({
  repos: {
    [index]: {
      $toggle: ["liked"]
    }
  }
});

export const removeProduct = index => ({
  products: { $splice: [[index, 1]] }
});

export const setTesting = (...params) => ({
  testing: { $set: params }
});

export const setNested = () => ({
  nested: { $set: "✔" }
});
