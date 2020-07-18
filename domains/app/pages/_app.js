import 'typeface-montserrat';

import React from 'react';
import { ThemeProvider, theme } from '@livipdev/core/styles';
import { createIntl, createIntlCache, RawIntlProvider } from 'react-intl';
import { Provider as StoreProvider } from 'react-redux';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';

import { useStore } from 'store';
import LoadingPage from 'components/Loading';

const cache = createIntlCache();

function App({ Component, pageProps, locale, messages }) {
  const store = useStore(pageProps.initialReduxState);
  const persistor = persistStore(store);
  const intl = createIntl(
    {
      locale,
      messages,
    },
    cache,
  );

  return (
    <RawIntlProvider value={intl}>
      <ThemeProvider theme={theme}>
        <StoreProvider store={store}>
          <PersistGate loading={<LoadingPage />} persistor={persistor}>
            <Component {...pageProps} />
          </PersistGate>
        </StoreProvider>
      </ThemeProvider>
    </RawIntlProvider>
  );
}

App.getInitialProps = async ({ Component, ctx }) => {
  const pageProps = {};

  const { req } = ctx;
  const locale = req?.locale ?? '';
  const messages = req?.messages ?? {};

  if (Component.getInitialProps) {
    Object.assign(pageProps, await Component.getInitialProps(ctx));
  }

  return {
    pageProps,
    locale,
    messages,
  };
};

export default App;
