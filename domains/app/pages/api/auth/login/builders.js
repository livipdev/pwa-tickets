import cookie from 'cookie';

import { isProduction } from 'helpers/validators';

import { CONFIGS } from './constants';

export const buildUserSecretCookie = userSecret => {
  const configs = {
    sameSite: CONFIGS.SECRET_COOKIE.SAME_SITE,
    maxAge: CONFIGS.SECRET_COOKIE.MAX_AGE,
    httpOnly: CONFIGS.SECRET_COOKIE.HTTP_ONLY,
    path: CONFIGS.SECRET_COOKIE.PATH,
    secure: isProduction(),
  };

  const secretCookie = cookie.serialize(
    CONFIGS.SECRET_COOKIE.NAME,
    userSecret,
    configs,
  );

  return secretCookie;
};
