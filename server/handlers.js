const { buildStartupMessage } = require('./builders');
const { server } = require('./constants');

const handleServerListen = (err) => {
  if (err) throw err;
  handleServerSuccessfulStartup();
};

const handleServerSuccessfulStartup = (port = server.port) => {
  const message = buildStartupMessage(port);

  console.log(message, 'color: green', 'color: white'); // eslint-disable-line no-console
};

module.exports.handleServerListen = handleServerListen;
