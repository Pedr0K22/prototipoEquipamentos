const path = require('path');

module.exports = function override(config) {
  // Configurar os fallbacks para os módulos do Node.js
  config.resolve.fallback = {
    fs: false,  // Não precisamos de 'fs' no front-end
    path: require.resolve('path-browserify'),
    buffer: require.resolve('buffer'),
    stream: require.resolve('stream-browserify'),
    util: require.resolve('util/'),
    url: require.resolve('url/')
  };

  return config;
};