const pkgJson = require('../package.json');

let PKG_VERSION = pkgJson.version;

let SERVER_PORT = 53721;
if (!process.env.port) {
  process.env.port = SERVER_PORT;
}

const mixinProperty = (key, defaultValue = '') => {
  return process.env[key] || defaultValue;
};

module.exports = {
  APP_NAME: mixinProperty('APP_NAME', pkgJson.name),
  APP_VERSION: mixinProperty('APP_VERSION', PKG_VERSION),
  SERVER_PORT: process.env.port,
};
