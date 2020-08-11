import flow from 'lodash/flow';
import { put, call, takeLatest } from 'redux-saga/effects';

import { finishSignIn, finishRememberPassWord } from './actions';
import { ACTION_TYPES, USER_SIGN_IN_API, USER_REMEMBER_PASSWORD_API } from './constants';

const normalizeAPIResponse = async res => {
  const body = await res.json();

  return {
    body,
    status: res.status,
  };
};

const handleSignInAPI = () => fetch(USER_SIGN_IN_API).then(normalizeAPIResponse);
const handleRememberPasswordAPI = () => fetch(USER_REMEMBER_PASSWORD_API).then(normalizeAPIResponse);

function* handleStartSignIn() {
  const result = yield call(handleSignInAPI);
  const resultHandler = flow(finishSignIn, put);

  yield resultHandler(result);
}

function* handleStartRememberPassword() {
  const result = yield call(handleRememberPasswordAPI);
  const resultHandler = flow(finishRememberPassWord, put);

  yield resultHandler(result);
}

function* watcher() {
  yield takeLatest(ACTION_TYPES.SIGN_IN.START, handleStartSignIn);
  yield takeLatest(ACTION_TYPES.REMEMBER_PASSWORD.START, handleStartRememberPassword);
}

export default watcher;
