export const NAME = 'user';
export const USER_SIGN_IN_API = '/api/auth/login';
export const USER_REMEMBER_PASSWORD_API = '/api/auth/password-recovery';

const SIGN_IN_START = 'USER::SIGN_IN::START';
const SIGN_IN_FINISH = 'USER::SIGN_IN::FINISH';
const REMEMBER_PASSWORD_START = 'USER::REMEMBER_PASSWORD::START';
const REMEMBER_PASSWORD_FINISH = 'USER::REMEMBER_PASSWORD::FINISH';

const SIGN_IN = {
  START: SIGN_IN_START,
  FINISH: SIGN_IN_FINISH,
};

const REMEMBER_PASSWORD = {
  START: REMEMBER_PASSWORD_START,
  FINISH: REMEMBER_PASSWORD_FINISH,
}

export const ACTION_TYPES = {
  SIGN_IN,
  REMEMBER_PASSWORD,
};
