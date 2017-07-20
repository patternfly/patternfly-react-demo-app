import { call, put, takeEvery } from 'redux-saga/effects';

import { cookieApi, KEY_LOGIN_COOKIE } from '../api/cookies';
import { loginApi } from '../api/loginApi';
import {
  TYPE_SET_CREDENTIALS,
  TYPE_INIT_CREDENTIALS,
  setCredentials
} from '../actions/login';

import {
  TYPE_LOGIN_USER,
  loginUserSucceeded,
  loginUserFailed
} from '../actions/login';

function* initUserSaga() {
  const credentials = yield call(cookieApi.getCookie, KEY_LOGIN_COOKIE);

  if (credentials) {
    yield put(setCredentials(credentials));
  }
}

function* loginUserSaga(action: any) {
  const credentials = action.payload.credentials;
  let { result, error } = yield call(loginApi.loginUser, credentials);
  if (error) {
    yield put(loginUserFailed(error));
  } else {
    yield put(setCredentials(result));
    yield put(loginUserSucceeded(result));
  }
}

function* setCredentialsSaga(action: any) {
  const { credentials } = action.payload;
  yield call(cookieApi.setCookie, KEY_LOGIN_COOKIE, credentials, 10);
}

export default function*() {
  yield takeEvery(TYPE_INIT_CREDENTIALS, initUserSaga);
  yield takeEvery(TYPE_SET_CREDENTIALS, setCredentialsSaga);
  yield takeEvery(TYPE_LOGIN_USER, loginUserSaga);
}
