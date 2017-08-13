const ngtools = require('@ngtools/webpack');
const webpackMerge = require('webpack-merge');
const commonPartial = require('./tasks/webpack.common');
const clientPartial = require('./tasks/webpack.client');
const serverPartial = require('./tasks/webpack.server');
const prodPartial = require('./tasks/webpack.prod');
const { getAotPlugin } = require('./tasks/webpack.aot');

module.exports = function (options, webpackOptions) {
  options = options || {};

  if (options.aot) {
    console.log(`Running build for ${options.client ? 'client' : 'server'} with AoT Compilation`)
  }

  const serverConfig = webpackMerge({}, commonPartial, serverPartial, {
    plugins: [
      getAotPlugin('server', !!options.aot)
    ]
  });

  let clientConfig = webpackMerge({}, commonPartial, clientPartial, {
    plugins: [
      getAotPlugin('client', !!options.aot)
    ]
  });

  if (webpackOptions.p) {
    clientConfig = webpackMerge({}, clientConfig, prodPartial);
  }

  const configs = [];
  if (!options.aot) {
    configs.push(clientConfig, serverConfig);

  } else if (options.client) {
    configs.push(clientConfig);

  } else if (options.server) {
    configs.push(serverConfig);
  }

  return configs;
}
