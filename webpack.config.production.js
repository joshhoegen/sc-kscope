const webpack = require('webpack')
const path = require('path')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
  mode: 'production',
  entry: './src/index',
  output: {
    path: path.join(__dirname, 'static'),
    filename: 'bundle.js',
    publicPath: '/',
  },
  resolve: {
    extensions: ['', '.js'],
  },
  devtool: 'source-map',
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    // new webpack.DefinePlugin({
    //   'process.env': {
    //     NODE_ENV: JSON.stringify('production'),
    //   },
    // }),
    // new webpack.optimize.UglifyJsPlugin({
    //   compress: {
    //     warnings: false,
    //   },
    // }),
    new CleanWebpackPlugin(['css/main.css', 'js/bundle.js'], {
      root: `${__dirname}/static`,
      verbose: true,
      dry: false, // true for simulation
    }),
    new ExtractTextPlugin('css/main.css'),
  ],
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loaders: ['babel-loader'],
        include: path.join(__dirname, 'src'),
      },
      {
        // https://github.com/jtangelder/sass-loader
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('css!sass'),
      },
      {
        test: /\.(jpe?g|gif|png)$/,
        loader: 'file-loader?name=public/media[name].[ext]',
      },
    ],
  },
}
