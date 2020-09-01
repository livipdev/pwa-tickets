const Koa = require('koa');
const next = require('next');
const accepts = require('accepts')
const glob = require('glob');
const Router = require('@koa/router');
const { basename } = require('path');
const { readFileSync } = require('fs');

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();
const supportedLanguages = glob
  .sync('./lang/*.json')
  .map((f) => basename(f, '.json'))

const localeDataCache = new Map();
const getLocaleDataScript = locale => {
  const lang = locale.split('-')[0];

  if (!localeDataCache.has(lang)) {
    const localeDataFile = require.resolve(
      `@formatjs/intl-relativetimeformat/dist/locale-data/${lang}`
    );
    const localeDataScript = readFileSync(localeDataFile, 'utf8');

    localeDataCache.set(lang, localeDataScript);
  };

  return localeDataCache.get(lang);
};
const getMessages = locale => {
  return require(`./lang/${locale}.json`);
};

app.prepare().then(() => {
  const server = new Koa();
  const router = new Router();

  router.all('(.*)', async (ctx) => {
    await handle(ctx.req, ctx.res);
    ctx.respond = false;
  });

  server.use(async (ctx, next) => {
    ctx.res.statusCode = 200;
    await next();
  });

  server.use(async ({ req }, next) => {
    const accept = accepts(req);
    const locale = accept.language(supportedLanguages) || process.env.DEFAULT_LOCALE;

    req.locale = locale;
    req.localeDataScript = getLocaleDataScript(locale);
    req.messages = getMessages(locale);

    await next();
  });

  server.use(router.routes())
  server.listen(port, () => {
    console.log(`> Ready on http://localhost:${port}`);
  });
});
