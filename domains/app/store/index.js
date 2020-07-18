import { useMemo } from 'react';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './rootReducer';
import rootSaga from './rootSaga';
import { DEFAULT_INITIAL_STATE } from './constants';

let store;

const sagaMiddleware = createSagaMiddleware();

const middlewares = composeWithDevTools(applyMiddleware(sagaMiddleware));

function makeStore(initialState = DEFAULT_INITIAL_STATE) {
  return createStore(rootReducer, initialState, middlewares);
};

export const initializeStore = preloadedState => {
  let currentStore = store ?? makeStore(preloadedState);

  if (preloadedState && store) {
    currentStore = makeStore({
      ...store.getState(),
      ...preloadedState,
    });
    store = undefined;
  }

  if (typeof window === 'undefined') return currentStore;
  if (!store) store = currentStore;

  sagaMiddleware.run(rootSaga);

  return currentStore;
};

export function useStore(initialState) {
  const currentStore = useMemo(() => initializeStore(initialState), [
    initialState,
  ]);
  return currentStore;
};
