import cookie from 'cookie';

import { TOKEN_KEY, STATUS } from './constants';

export default function handler(req, res) {
  const cookies = cookie.parse(req.headers.cookie);

  res.status(
    cookies[TOKEN_KEY]
      ? STATUS.OK
      : STATUS.UNAUTHORIZED
  );
  res.end();
};
