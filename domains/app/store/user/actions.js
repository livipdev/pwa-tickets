import { ACTION_TYPES } from './constants';

export const startSignIn = payload => ({
  payload,
  type: ACTION_TYPES.SIGN_IN.START,
});

export const finishSignIn = payload => ({
  payload,
  type: ACTION_TYPES.SIGN_IN.FINISH,
});

export const startRememberPassWord = payload => ({
  payload,
  type: ACTION_TYPES.REMEMBER_PASSWORD.START,
});

export const finishRememberPassWord = payload => ({
  payload,
  type: ACTION_TYPES.REMEMBER_PASSWORD.FINISH,
});