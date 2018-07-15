import { fork } from 'redux-saga/effects';

import { watchFetchRepositoriesRequest } from './repositories';
import { watchShowMessageRequest } from './messages';

export default function* rootSaga() {
  yield [fork(watchFetchRepositoriesRequest), fork(watchShowMessageRequest)];
}
