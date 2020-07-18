import { ACTION_TYPES } from './constants';

export const updateTest = () => ({
  type: ACTION_TYPES.TEST.UPDATE,
  payload: 'THIS IS A TEST',
});

export const startUserTest = () => ({
  type: ACTION_TYPES.TEST.START,
});

export const finishUserTest = payload => ({
  payload,
  type: ACTION_TYPES.TEST.FINISH,
});
