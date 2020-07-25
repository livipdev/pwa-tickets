export const PATH = '/api/auth/login';

const SECRET_COOKIE_CONFIGS = {
  MAX_AGE: 72576000,
  SAME_SITE: true,
  HTTP_ONLY: true,
  PATH: '/',
  NAME: 'LIVIPJWT',
};

export const CONFIGS = {
  SECRET_COOKIE: SECRET_COOKIE_CONFIGS,
};

const SET_COOKIE = 'Set-Cookie';

export const HEADERS = {
  SET_COOKIE,
};

export const STATUS = {
  OK: 200,
  NOT_FOUND: 404,
  INTERNAL_SERVER_ERROR: 500,
};
