import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import user from './user';

const rootPersistConfig = {
  storage,
    key: 'root',
};

const rootReducer = combineReducers({
  [user.name]: user.reducer,
});

export default persistReducer(rootPersistConfig, rootReducer);
