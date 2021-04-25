function configurationSvg(config, iconBase) {
  // 找到svg-loader
  const svgRule = config.module.rule('svg');
  // 清除已有的loader, 如果不这样做会添加在此loader之后
  svgRule.uses.clear();
  // 正则匹配排除node_modules目录
  svgRule.exclude.add(/node_modules/);

  svgRule // 添加svg新的loader处理
    .test(/\.svg$/)
    .use('svg-sprite-loader')
    .loader('svg-sprite-loader')
    .options({
      symbolId: 'icon-[name]',
    });

  // 修改images loader 添加svg处理
  const imagesRule = config.module.rule('images');
  imagesRule.exclude.add(iconBase);
  config.module.rule('images').test(/\.(png|jpe?g|gif|svg)(\?.*)?$/);
}

module.exports.configurationSvg = configurationSvg;
