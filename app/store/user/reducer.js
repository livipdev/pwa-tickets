import { createReducer } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import initialState from './initialState';
import { ACTION_TYPES } from './constants';

const handleSignInStart = (state) => {
  state.loading = true;
};

const handleSignInFinish = (state, action) => {
  state.loading = false;
  state.auth_token = action.payload.token;
};

const reducer = createReducer(initialState, {
  [ACTION_TYPES.SIGN_IN.START]: handleSignInStart,
  [ACTION_TYPES.SIGN_IN.FINISH]: handleSignInFinish,
});

const persistConfig = {
  storage,
  key: 'user',
};

export default persistReducer(persistConfig, reducer);
