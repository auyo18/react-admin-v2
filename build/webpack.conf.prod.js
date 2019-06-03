const path = require('path')
const merge = require('webpack-merge')
const baseWebpackConfig = require('./webpack.conf.base')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const utils = require('./utils')

const config = merge(baseWebpackConfig, {
  mode: 'production',
  module: {
    rules: utils.styleLoaders({
      sourceMap: false,
      extract: true,
      usePostCSS: true
    })
  },
  output: {
    path: path.join(__dirname, '../dist'),
    filename: 'js/[name].[chunkhash:8].js',
    chunkFilename: 'js/[name].[chunkhash:8].js'
  },
  devtool: 'source-map',
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'css/[name].[chunkhash:8].css',
      chunkFilename: 'css/[name].[chunkhash:8].css'
    }),
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "index.html",
      inject: true,
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeAttributeQuotes: true
      }
    })
  ],
  optimization: {
    splitChunks: {
      chunks: 'all',
      cacheGroups: {
        libs: {
          name: 'chunk-libs',
          test: /[\\/]node_modules[\\/]/,
          priority: 10,
          chunks: 'initial' // 只打包初始时依赖的第三方
        }
      }
    },
    runtimeChunk: 'single',
    minimizer: [
      new UglifyJsPlugin({
        uglifyOptions: {
          mangle: true
        },
        sourceMap: true,
        cache: true,
        parallel: true
      }),
      // Compress extracted CSS. We are using this plugin so that possible
      // duplicated CSS from different components can be deduped.
      new OptimizeCSSAssetsPlugin()
    ]
  }
})

module.exports = config
