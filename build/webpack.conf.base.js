const path = require('path')

const config = {
  entry: {
    app: './src/app.js'
  },
  output: {
    path: path.join(__dirname, '../dist'),
    filename: 'js/[name].js',
    publicPath: '/'
  },
  resolve: {
    extensions: ['.js', '.json', '.scss', '.css']
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 10000,
              name: './image/[name].[hash:8].[ext]'
            }
          }
        ]
      }
    ]
  }
}

module.exports = config
