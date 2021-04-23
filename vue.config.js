const { R, join, src, ui } = require('./ci/paths');

module.exports = {
  transpileDependencies: ['vuetify'],
  configureWebpack: (config) => {
    // config.resolve.alias
    //   .set('@$', src)
    //   .set('@ui$', ui)
    //   .set('@lib$', resolve('src/libs'))
    //   .set('@layouts$', resolve('src/layouts'));

    config.resolve.alias['@'] = src;
    config.resolve.alias['@ui'] = ui;
    config.resolve.alias['@lib'] = R(src, 'libs');
    config.resolve.alias['@layouts'] = R(src, 'layouts');
    config.resolve.alias['@views'] = R(src, 'views');
  },
};
