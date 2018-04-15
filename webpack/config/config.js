const path = require('path');
const proxyConfig = require('./proxy.config')

// 研发/测试/线上构建配置项
const config = {
  dev: {
    port: 9001,
    outputDir: path.join(__dirname, '../../build'),
    publicPath: '/',
    proxy: proxyConfig
  },

  test: {
    outputDir: path.join(__dirname, '../../build'),
    publicPath: '/'
  },

  production: {
    outputDir: path.join(__dirname, '../../build'),
    publicPath: '/'
  }
};

module.exports = config;
