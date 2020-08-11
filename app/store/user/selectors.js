import flow from 'lodash/flow';

import { NAME } from './constants';

const selectUserState = state => state[NAME];

const selectTestKey = authState => authState.test;

export const selectUserTest = flow(
  selectUserState,
  selectTestKey,
);
