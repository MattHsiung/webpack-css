/**
 * Created by matt on 2/19/17.
 */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
module.exports = {
  context: path.join(__dirname, 'src'),
  entry: {
    home: './app/home',
    about: './app/about'
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: path.join(__dirname, 'src')
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader',
        include: path.join(__dirname, 'src')
      }
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    inline: true,
    hot: true,
    historyApiFallback: true,

  },
  resolve: {

    alias: {
      'styles': path.resolve(__dirname, 'src/styles')
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'src', 'index.html'),
      inject: 'body',
      excludeChunks: ['about'],
      filename: 'index.html'
    }),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'src', 'index.html'),
      inject: 'body',
      excludeChunks: ['home'],
      filename: 'about.html'
    }),
    new webpack.HotModuleReplacementPlugin(),

    new webpack.optimize.CommonsChunkPlugin({
      name: 'common'
    })
  ]
};