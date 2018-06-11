import * as API from 'api';

export default props => ({
  load: () =>
    Promise.all([
      API.getGithubRepos(),
      API.searchItunesContentFor('Merzbow'),
    ]).then(([repos, products]) => ({
      repos: { $set: repos },
      products: { $set: products },
    })),
  toggleRepoLike: index =>
    Promise.resolve({
      repos: {
        [index]: {
          $toggle: ['liked'],
        },
      },
    }),
});
