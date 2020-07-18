import { createReducer } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import initialState from './initialState';
import { ACTION_TYPES } from './constants';

const handleTestUpdate = (state, action) => {
  state.test = action.payload;
};

const handleTestStart = (state) => {
  state.loading = true;
};

const handleTestFinish = (state, action) => {
  state.loading = false;
  state.payload = action.payload;
};

const reducer = createReducer(initialState, {
  [ACTION_TYPES.TEST.UPDATE]: handleTestUpdate,
  [ACTION_TYPES.TEST.START]: handleTestStart,
  [ACTION_TYPES.TEST.FINISH]: handleTestFinish,
});

const persistConfig = {
  storage,
  key: 'user',
};

export default persistReducer(persistConfig, reducer);
