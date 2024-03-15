const {getDefaultConfig, mergeConfig} = require('@react-native/metro-config');

/**
 * Metro configuration
 * https://facebook.github.io/metro/docs/configuration
 *
 * @type {import('metro-config').MetroConfig}
 */
const config = {
  projectRoot: __dirname,
  watchFolders: [__dirname, `${__dirname}/src`], // add the root and src folder to watch
};

module.exports = mergeConfig(getDefaultConfig(__dirname), config);
