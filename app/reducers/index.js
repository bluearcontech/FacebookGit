import { combineReducers } from 'redux';

const initialState = null;

import menu from './menu';
import repos from './fetchRepositories';
import repository from './repository';

const reducers = combineReducers({
  menu,
  repository,
  repos,
});

export default reducers;
