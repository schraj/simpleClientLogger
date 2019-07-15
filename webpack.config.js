const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    simpleClientLogger: './src/simpleClientLogger.js',
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader"
          }
        ]
      },
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
  ],
  output: {
    filename: 'simpleClientLogger.js',
    path: path.resolve(__dirname, 'dist')
  }
};