import App from 'next/app';
import React from 'react';
import { ThemeProvider, theme } from '@livipdev/core/styles';
import { createIntl, createIntlCache, RawIntlProvider } from 'react-intl';

import 'typeface-montserrat';

const cache = createIntlCache();

export default class TravelApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    const { req } = ctx;
    const { locale, messages } = req || window.__NEXT_DATA__.props; // eslint-disable-line no-underscore-dangle

    return { pageProps, locale, messages };
  }

  render() {
    const { Component, pageProps, locale, messages } = this.props;
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
          <Component {...pageProps} />
        </ThemeProvider>
      </RawIntlProvider>
    );
  }
}
