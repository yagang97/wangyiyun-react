const path = require('path')
module.exports = function override(config, env) {

  // babelrc配置  用来设置转码的规则和插件的
  config.module.rules[2].oneOf[1].options.babelrc = true;
    
  config.resolve.alias = {//配置别名 
    'assets': path.resolve(__dirname, './src/assets'),
    'pages': path.resolve(__dirname, './src/pages'),
    'music': path.resolve(__dirname, './src/pages/home/music'),
    'components': path.resolve(__dirname, './src/components'),
    'utils': path.resolve(__dirname, './src/utils'),
    '@': path.resolve(__dirname, './src')
  } 

  return config;
};