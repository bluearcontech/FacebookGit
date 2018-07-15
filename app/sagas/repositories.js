import { call, put, takeEvery } from 'redux-saga/effects';

import { showMessageRequest } from '../actions/messages';
import * as Api from '../services/repositories';
import { fetchRepositoriesSuccessAction } from '../actions/fetchRepositories';
import { fetchRepositoryByIdSuccessAction } from '../actions/repository';
import {
  fetchRepositoryLanguageSuccessAction,
  fetchRepositoryBranchesSuccessAction,
  fetchRepositoryCommitsSuccessAction,
  fetchRepositoryContributorsSuccessAction,
  fetchRepositoryTopicsSuccessAction,
} from '../actions/repository';
import * as types from '../actions/types';

export function* fetchRepositoriesSaga(action) {
  try {
    const repoInfo = yield call(Api.getRepositories, action.page);
    yield put(fetchRepositoriesSuccessAction(repoInfo));
  } catch (e) {
    yield put(showMessageRequest(e));
  }
}

export function* fetchRepositorySaga(action) {
  try {
    const repository = yield call(Api.getRepositoryById, action.id);
    yield put(fetchRepositoryByIdSuccessAction(repository));
  } catch (e) {
    yield put(showMessageRequest(e, 'repositoryById'));
  }
}

export function* fetchRepositoryLanguageSaga(action) {
  try {
    const languages = yield call(Api.getRepositoryLanguages, action.url);
    yield put(fetchRepositoryLanguageSuccessAction(languages));
  } catch (e) {
    yield put(showMessageRequest(e, 'languages'));
  }
}

export function* fetchRepositoryCommitsSaga(action) {
  try {
    const commits = yield call(Api.getRepositoryProperty, action.url);
    yield put(fetchRepositoryCommitsSuccessAction(commits));
  } catch (e) {
    yield put(showMessageRequest(e, 'fetch repository property failed'));
  }
}

export function* fetchRepositoryBranchesSaga(action) {
  try {
    const branches = yield call(Api.getRepositoryProperty, action.url);
    yield put(fetchRepositoryBranchesSuccessAction(branches));
  } catch (e) {
    yield put(showMessageRequest(e, 'fetch repository property failed'));
  }
}

export function* fetchRepositoryContributorsSaga(action) {
  try {
    const contributors = yield call(Api.getRepositoryProperty, action.url);
    yield put(fetchRepositoryContributorsSuccessAction(contributors));
  } catch (e) {
    yield put(showMessageRequest(e, 'fetch contributors failed'));
  }
}

export function* fetchRepositoryTopicsSaga(action) {
  try {
    const topics = yield call(Api.getRepositoryProperty, action.url);
    yield put(fetchRepositoryTopicsSuccessAction(topics));
  } catch (e) {
    yield put(showMessageRequest(e, 'fetch repository topics'));
  }
}
export function* watchFetchRepositoriesRequest() {
  yield takeEvery(types.FETCH_REPOSITORIES_REQUEST, fetchRepositoriesSaga);
  yield takeEvery(types.FETCH_REPOSITORY_REQUEST, fetchRepositorySaga);
  yield takeEvery(types.FETCH_REPOSITORY_LANGUAGE_REQUEST, fetchRepositoryLanguageSaga);
  yield takeEvery(types.FETCH_REPOSITORY_COMMITS_REQUEST, fetchRepositoryCommitsSaga);
  yield takeEvery(types.FETCH_REPOSITORY_BRANCHES_REQUEST, fetchRepositoryBranchesSaga);
  yield takeEvery(types.FETCH_REPOSITORY_CONTRIBUTORS_REQUEST, fetchRepositoryContributorsSaga);
  yield takeEvery(types.FETCH_REPOSITORY_TOPICS_REQUEST, fetchRepositoryTopicsSaga);
}
