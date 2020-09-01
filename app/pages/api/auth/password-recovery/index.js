/* eslint-disable no-unused-vars */
import { STATUS } from './constants';

const handleSuccessfullPasswordRecovery = (req, res) => {
  res.statusCode = STATUS.OK;
  res.json('{}');
};

const handleFailurePasswordRecovery = (req, res) => {
  res.statusCode = STATUS.NOT_FOUND;
  res.json('{}');
};

export default handleSuccessfullPasswordRecovery;
