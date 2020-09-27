const Timestamp = new Date().getTime()
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
  .BundleAnalyzerPlugin
let plugins = [
  new MiniCssExtractPlugin({
    // 修改打包后css文件名
    filename: `css/[name].${process.env.NODE_ENV}.${Timestamp}.css`,
    chunkFilename: `css/[name].${process.env.NODE_ENV}.${Timestamp}.css`
  })
]
if (process.env.VUE_APP_IS_ANALYZER === 'true') {
  plugins.push(new BundleAnalyzerPlugin())
}
module.exports = {
  lintOnSave: false,
  productionSourceMap: false,
  publicPath: './',
  // 输出文件目录
  outputDir: 'dist',
  // webpack-dev-server 相关配置
  devServer: {
    port: 8090,
    // proxy: process.env.VUE_APP_BASE_URL
    proxy: {
      '/api': {
        target: process.env.VUE_APP_BASE_URL,
        changeOrigin: true,
        pathRewrite: {
          '^/api': 'api'
        },
        logLevel: 'debug'
      },
      '/feishu': {
        target: process.env.VUE_APP_BASE_URL_FEISHU,
        changeOrigin: true,
        pathRewrite: {
          '^/feishu': ''
        },
        logLevel: 'debug'
      }
    }
  },
  css: {
    loaderOptions: {
      sass: {
        // data：`@import "~@/assets/common.scss";` v7之前使用 的是data，现在改成了prependData
        prependData: '@import "~@/assets/css/variables.scss";'
      }
    }
  },
  configureWebpack: {
    // webpack 配置
    output: {
      // 输出重构  打包编译后的 文件名称  【模块名称.版本号.时间戳】
      filename: `js/[name].${process.env.NODE_ENV}.${Timestamp}.js`,
      chunkFilename: `js/[name].${process.env.NODE_ENV}.${Timestamp}.js`
    },
    plugins: plugins
  }
}
