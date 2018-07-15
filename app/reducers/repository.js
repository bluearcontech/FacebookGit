import * as types from '../actions/types';

const initialState = {
  detail: {},
  languages: [],
  topics: [],
  branches: [],
  contributors: [],
  messages: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_REPOSITORY_SUCCESS:
      return { ...state, detail: action.repository };
    case types.FETCH_REPOSITORY_LANGUAGE_SUCCESS:
      return { ...state, languages: action.languages };
    case types.FETCH_REPOSITORY_BRANCHES_SUCCESS:
      return { ...state, branches: action.branches };
    case types.FETCH_REPOSITORY_COMMITS_SUCCESS:
      return { ...state, commits: action.commits };
    case types.FETCH_REPOSITORY_CONTRIBUTORS_SUCCESS:
      return { ...state, contributors: action.contributors };
    case types.FETCH_REPOSITORY_TOPICS_SUCCESS:
      return { ...state, topics: action.topics.names };

    default:
      return state;
  }
};
