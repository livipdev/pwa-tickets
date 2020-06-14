const next = require('next');
const accepts = require('accepts');
const { readFileSync } = require('fs');

const { stage, locale } = require('./constants');
const { selectLocaleMessages, selectLocaleDataScript, selectAvailableLocales } = require('./selectors');
const { isCurrentStageDev } = require('./validators');

const devStage = isCurrentStageDev(stage.current, stage.production);

const buildCurrentApp = (dev = devStage) => next({ dev });

const buildCustomServer = (handleRequest) => (req, resp) => {
  applyMiddlewares(req, resp);

  handleRequest(req, resp);
};

const applyMiddlewares = (req, resp) => {
  addLocaleData(req, resp);
};

const addLocaleData = (req) => {
  const availableLocales = selectAvailableLocales(locale.path, locale.extension, locale.wildcard);
  const accept = accepts(req);
  const currentLocale = accept.language(availableLocales) || locale.default;
  const messages = devStage ? {} : selectLocaleMessages(currentLocale, locale, locale.rootLocation);
  const localeDataScript = selectLocaleDataScript(currentLocale, locale.cache, buildLocaleCache);

  req.locale = currentLocale;
  req.localeDataScript = localeDataScript;
  req.messages = messages;
};

const buildLocaleCache = (lang, cache, encoding = locale.encoding) => {
  const localeResolver = `@formatjs/intl-relativetimeformat/dist/locale-data/${lang}`;
  const localeDataFile = require.resolve(localeResolver);
  const localeDataScript = readFileSync(localeDataFile, encoding);

  return cache.set(lang, localeDataScript);
};

const buildStartupMessage = (port) => {
  const status = '[ \x1b[32mready\x1b[0m ]';
  const message = `server running on http://localhost:${port}`;

  return [status, message].join(' ');
};

module.exports.buildCurrentApp = buildCurrentApp;
module.exports.buildCustomServer = buildCustomServer;
module.exports.buildStartupMessage = buildStartupMessage;
