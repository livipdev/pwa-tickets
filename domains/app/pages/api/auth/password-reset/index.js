/* eslint-disable no-unused-vars */
import { STATUS } from './constants';

const handleSuccessfullPasswordReset = (req, res) => {
  res.statusCode = STATUS.OK;
  res.json('{}');
};

const handleFailurePasswordReset = (req, res) => {
  res.statusCode = STATUS.NOT_FOUND;
  res.json('{}');
};

export default handleSuccessfullPasswordReset;
