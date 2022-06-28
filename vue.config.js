module.exports = {
  // 是否保留map文件
  productionSourceMap: false,
  // 部署应用时的基本 URL(从 Vue CLI 3.3 起已弃用，请使用publicPath。)
  publicPath: process.env.NODE_ENV === "production" ? "/" : "/",
  // build生成的目录名称
  outputDir: "dist",
  // build时放置生成的静态资源目录名称
  assetsDir: "static",
  // 指定生成的 index.html 的输出路径
  indexPath: "index.html",
  // 所有 webpack-dev-server 的选项都支持
  devServer: {
    host: "localhost",
    port: 8080,
    open: true, // 自动开启浏览器
    hotOnly: true, //热更新
    overlay: {
      // 出现编译器错误或警告时，在浏览器中显示全屏覆盖
      warnings: true,
      errors: true
    }
    // proxy: {
    //   "/api": {
    //       target: "http://172.11.11.11:7071",
    //       changeOrigin: true,
    //       // ws: true,//websocket支持
    //       secure: false,
    //       pathRewrite: {
    //           "^/api": "/"
    //       }
    //   },
    // }
  },
  // 是否开启eslint保存检测，有效值：ture | false | 'production-生产环境启用' | 'development-开发环境启用'
  lintOnSave: process.env.NODE_ENV == false
};
