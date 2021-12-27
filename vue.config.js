module.exports = {
  lintOnSave: false,
  publicPath: './',
  devServer: {
    proxy: 'https://test-api-dyhai.videoyi.com/',
    open: true, // 启动服务后是否打开浏览器
    port: 8080, // 服务端口
  },
};
