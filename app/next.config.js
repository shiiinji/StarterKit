// next.config.js
const withManifest = require('next-manifest');
const withPlugins = require("next-compose-plugins");
const withWorkbox = require('next-workbox');
const withTypescript  = require('@zeit/next-typescript')


module.exports = withPlugins(
  [
    [withTypescript],
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