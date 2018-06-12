export const toJSON = response => response.json();

export const get = url => window.fetch(url).then(toJSON);

export const getGithubRepos = () =>
  get("https://api.github.com/repositories").then(
    repos =>
      !Array.isArray(repos)
        ? []
        : repos.slice(0, 20).map(({ name, description, html_url }) => ({
            url: html_url,
            name,
            description
          }))
  );

export const searchItunesContentFor = keyword => {
  const term = window.encodeURIComponent(keyword);

  return get(`https://itunes.apple.com/search?term=${term}`).then(
    ({ results }) =>
      results.map(({ artistName, collectionName, collectionViewUrl }) => ({
        name: artistName,
        description: collectionName,
        url: collectionViewUrl
      }))
  );
};
