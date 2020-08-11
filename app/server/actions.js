const IntlPolyfill = require('intl');

const { buildCurrentApp } = require('./builders');
const { transformNextApp } = require('./transformers');
const { handleServerListen } = require('./handlers');
const { server } = require('./constants');

const applyServerPolyfills = () => {
  Intl.NumberFormat = IntlPolyfill.NumberFormat;
  Intl.DateTimeFormat = IntlPolyfill.DateTimeFormat;
};

const startServer = (port = server.port) => {
  applyServerPolyfills();

  const app = buildCurrentApp();
  const preparedApp = app.prepare();
  const transformApp = transformNextApp(app).listen(port, handleServerListen);

  return preparedApp.then(transformApp);
};

module.exports.startServer = startServer;
