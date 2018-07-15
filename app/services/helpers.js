import 'whatwg-fetch';

export const fetchRepositories = page => {
  return fetch(`https://api.github.com/search/repositories?page=${page}&q=facebook&sort=stars&oder=desc`, {
    credentials: 'same-origin',
  });
};

export const fetchRepositoryById = id => {
  return fetch(`https://api.github.com/repositories/${id}`, {
    credentials: 'same-origin',
  });
};

export const fetchRepositoryProperty = url => {
  return fetch(url, {
    credentials: 'same-origin',
    headers: {
      Accept: 'application/vnd.github.mercy-preview+json',
    },
  });
};
