const merge = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const baseWebpackConfig = require('./webpack.conf.base')
const utils = require('./utils')

const devServer = {
  port: 3000,
  host: '0.0.0.0',
  historyApiFallback: true,
  hot: true,
  compress: true
}

const config = merge(baseWebpackConfig, {
  mode: 'development',
  devtool: 'cheap-source-map',
  module: {
    rules: utils.styleLoaders({
      sourceMap: false,
      usePostCSS: true
    })
  },
  devServer,
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
      inject: true
    })
  ]
})

module.exports = config
