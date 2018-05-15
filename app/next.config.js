// next.config.js
const withAwesomeTypescript = require('next-awesome-typescript');
const withManifest = require('next-manifest');
const withPlugins = require("next-compose-plugins");
const withWorkbox = require('next-workbox');

const typescriptOptions = {
  useCheckerPlugin: true,
  loaderOptions: {
    transpileOnly: false,
    configFileName: 'app/tsconfig.json',
  },
};

module.exports = withPlugins(
  [
    [withAwesomeTypescript, typescriptOptions],
    // withWorkbox,
    // [withManifest, {
    //   manifest: {
    //     icons: {
    //       src: './assets/icon-512x512.png',
    //       cache: true,
    //     },
    //   }
    // }]
]);