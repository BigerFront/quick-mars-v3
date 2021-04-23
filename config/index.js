const pkgJson = require('../package.json');

let PKG_VERSION = pkgJson.version;

const mixinProperty = (key, defaultValue = '') => {
  return process.env[key] || defaultValue;
};

module.exports = {
  APP_NAME: mixinProperty('APP_NAME', pkgJson.name),
  APP_VERSION: mixinProperty('APP_VERSION', PKG_VERSION),
};
