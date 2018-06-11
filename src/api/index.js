export const toJSON = response => response.json();

// export const randomize = () => 0.5 - Math.random();

export const get = url => window.fetch(url).then(toJSON);

export const getGithubRepos = () =>
  get('https://api.github.com/repositories').then(repos =>
    repos
      // .sort(randomize)
      .slice(0, 10)
      .map(({ name, description, html_url }) => ({
        url: html_url,
        name,
        description,
      })),
  );

export const searchItunesContentFor = keyword => {
  const term = window.encodeURIComponent(keyword);

  return get(`https://itunes.apple.com/search?term=${term}`).then(
    ({ results }) =>
      results.map(({ artistName, collectionName, collectionViewUrl }) => ({
        name: artistName,
        description: collectionName,
        url: collectionViewUrl,
      })),
  );
};
