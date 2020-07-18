import reducer from './reducer';
import sagas from './sagas';
import * as constants from './constants';

export default {
  reducer,
  sagas,
  name: constants.NAME,
};
