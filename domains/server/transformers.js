const { createServer } = require('http');

const { buildCustomServer } = require('./builders');

const transformNextApp = (app) => {
  const handleRequest = app.getRequestHandler();
  const customServer = buildCustomServer(handleRequest);

  return createServer(customServer);
};

module.exports.transformNextApp = transformNextApp;
