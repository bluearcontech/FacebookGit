import * as types from './types';

export function fetchRepositoryByIdAction(id) {
  return {
    type: types.FETCH_REPOSITORY_REQUEST,
    id,
  };
}

export function fetchRepositoryByIdSuccessAction(repository) {
  return {
    type: types.FETCH_REPOSITORY_SUCCESS,
    repository,
  };
}

export function fetchRepositoryLanguageAction(url) {
  return {
    type: types.FETCH_REPOSITORY_LANGUAGE_REQUEST,
    url,
  };
}

export function fetchRepositoryLanguageSuccessAction(languages) {
  return {
    type: types.FETCH_REPOSITORY_LANGUAGE_SUCCESS,
    languages,
  };
}

export function fetchRepositoryCommitsAction(url) {
  return {
    type: types.FETCH_REPOSITORY_COMMITS_REQUEST,
    url,
  };
}

export function fetchRepositoryCommitsSuccessAction(commits) {
  return {
    type: types.FETCH_REPOSITORY_COMMITS_SUCCESS,
    commits,
  };
}
export function fetchRepositoryBranchesAction(url) {
  return {
    type: types.FETCH_REPOSITORY_BRANCHES_REQUEST,
    url,
  };
}

export function fetchRepositoryBranchesSuccessAction(branches) {
  return {
    type: types.FETCH_REPOSITORY_BRANCHES_SUCCESS,
    branches,
  };
}

export function fetchRepositoryContributorsAction(url) {
  return {
    type: types.FETCH_REPOSITORY_CONTRIBUTORS_REQUEST,
    url,
  };
}

export function fetchRepositoryContributorsSuccessAction(contributors) {
  return {
    type: types.FETCH_REPOSITORY_CONTRIBUTORS_SUCCESS,
    contributors,
  };
}

export function fetchRepositoryTopicsAction(url) {
  return {
    type: types.FETCH_REPOSITORY_TOPICS_REQUEST,
    url,
  };
}

export function fetchRepositoryTopicsSuccessAction(topics) {
  return {
    type: types.FETCH_REPOSITORY_TOPICS_SUCCESS,
    topics,
  };
}
