import flow from 'lodash/flow';
import { put, call, takeLatest } from 'redux-saga/effects';

import { finishUserTest } from './actions';
import { ACTION_TYPES, TEST_API } from './constants';

const normalizeAPIResponse = async res => {
  const body = await res.json();

  return {
    body,
    status: res.status,
  };
};

const handleAPITest = () => fetch(TEST_API).then(normalizeAPIResponse);

function* handleStartTest() {
  const result = yield call(handleAPITest);
  const resultHandler = flow(finishUserTest, put);

  yield resultHandler(result);
}

function* watcher() {
  yield takeLatest(ACTION_TYPES.TEST.START, handleStartTest);
}

export default watcher;
