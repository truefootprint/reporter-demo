const withSass = require('@zeit/next-sass');

const assetPrefix = process.env.NODE_ENV === 'production' ? '/footprint' : '';

module.exports = withSass({
  cssModules: true,
  assetPrefix: assetPrefix,
  publicRuntimeConfig: { assetPrefix }
});
