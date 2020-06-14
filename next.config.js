const config = require('@livipdev/config').default;

const serverRuntimeConfig = {};

const publicRuntimeConfig = {
  variant: config.variants.travel,
};

const nextConfig = {
  serverRuntimeConfig,
  publicRuntimeConfig,
  env: {},

  webpack(webpackConfig) {
    webpackConfig.module.rules.push({
      test: /\.svg$/,
      issuer: {
        test: /\.(js|ts)x?$/,
      },
      use: ['@svgr/webpack'],
    });

    return webpackConfig;
  },
};

module.exports = nextConfig;
