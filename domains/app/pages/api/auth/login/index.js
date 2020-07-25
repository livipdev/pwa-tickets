/* eslint-disable no-unused-vars */
import mockedResponse from './mockedResponse.json';
import { buildUserSecretCookie } from './builders';
import { STATUS, HEADERS } from './constants';

const handleSuccessfullLogin = (req, res) => {
  const cookie = buildUserSecretCookie(mockedResponse.token);

  res.statusCode = STATUS.OK;
  res.setHeader(HEADERS.SET_COOKIE, cookie);
  res.json(mockedResponse);
};

const handleFailedLogin = (req, res) => {
  res.statusCode = STATUS.NOT_FOUND;
  res.json('{}');
};

export default handleSuccessfullLogin;
