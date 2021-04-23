const { R, join, src, ui } = require('./ci/paths');
const { APP_NAME, APP_VERSION } = require('./config');

module.exports = {
  transpileDependencies: ['vuetify'],
  configureWebpack: (config) => {
    config.resolve.alias['@'] = src;
    config.resolve.alias['@ui'] = ui;
    config.resolve.alias['@lib'] = R(src, 'libs');
    config.resolve.alias['@layouts'] = R(src, 'layouts');
    config.resolve.alias['@views'] = R(src, 'views');
  },
  chainWebpack: (config) => {
    // console.log(JSON.stringify(config, null, '2'));

    // https://github.com/Yatoo2018/webpack-chain/tree/zh-cmn-Hans#%E9%85%8D%E7%BD%AE%E6%8F%92%E4%BB%B6
    config.plugin('define').tap((args) => {
      args[0]['process.env'].__QK3_APP_VERSION__ = JSON.stringify(APP_VERSION);
      args[0]['process.env'].__QK3_APP_NAME__ = JSON.stringify(APP_NAME);
      return args;
    });
  },
};
