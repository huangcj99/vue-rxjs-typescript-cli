const proxyConfig = {
  '/api/**': {
    // target: 'http://192.168.1.3:21033',
    target: 'http://test.weixin.api.renbo.dingdingyisheng.mobi',
    changeOrigin: true
  }
}

module.exports = proxyConfig;
