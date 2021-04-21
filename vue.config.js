const { R, src, ui } = require('./ci/paths');

module.exports = {
  transpileDependencies: ['vuetify'],
  chainWebpack: (config) => {
    config.resolve.alias
      .set('@')
      .set('@ui', ui)
      .set('@lib', R(src, 'libs'))
      .set('@layouts', R(src, 'layouts'));
  },
};
