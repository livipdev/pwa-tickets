const { selectLocaleCache } = require('./selectors');

const stage = {
  current: process.env.NODE_ENV,
  production: 'production',
};

const locale = {
  path: 'locales',
  extension: '.json',
  rootLocation: '..',
  wildcard: '*',
  encoding: 'utf8',
  default: process.env.DEFAULT_LOCALE,
  cache: selectLocaleCache(),
};

const server = {
  port: process.env.PORT || '3000',
};

const relativeAppDir = '.';

module.exports.stage = stage;
module.exports.locale = locale;
module.exports.server = server;
module.exports.relativeAppDir = relativeAppDir;
