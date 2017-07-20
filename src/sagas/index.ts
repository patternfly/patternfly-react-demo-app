import { all, fork, put } from 'redux-saga/effects';

import login from './login';
import { initCredentials } from '../actions/login';

function* rootSaga() {
  yield all([fork(login), put(initCredentials())]);
}

export default rootSaga;
