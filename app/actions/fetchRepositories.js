import * as types from './types';

export function fetchRepositoriesRequestAction(page) {
  return {
    type: types.FETCH_REPOSITORIES_REQUEST,
    page,
  };
}

export function fetchRepositoriesSuccessAction(repoInfo) {
  return {
    type: types.FETCH_REPOSITORIES_SUCCESS,
    repoInfo,
  };
}
