import * as types from '../actions/types';

const initialState = {
  loading: false,
  repoInfo: {},
  messages: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_REPOSITORIES_REQUEST:
      return { ...state, loading: true };
    case types.FETCH_REPOSITORIES_SUCCESS:
      return { ...state, repoInfo: action.repoInfo, loading: false };
    case types.FETCH_REPOSITORY_SUCCESS:
      return action.repository;
    case types.SHOW_MESSAGE:
      const currentMessages = state.messages;
      return {
        ...state,
        loading: false,
        messages: currentMessages.concat([{ messageId: action.messageId, message: action.message }]),
      };

    case types.HIDE_MESSAGE:
      return state.messages.filter(message => message.messageId !== action.messageId);
    default:
      return state;
  }
};
