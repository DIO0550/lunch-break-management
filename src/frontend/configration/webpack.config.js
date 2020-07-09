const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { VueLoaderPlugin } = require("vue-loader");


module.exports = {
  mode: "development",
  entry: [
    './js/index.js'
  ],
  output: {
    path: `${__dirname}/../dist/`,
    filename: 'build.js'
  },
  devtool: 'source-map',
  devServer: {
    index: 'index.html',
    publicPath: '/',
    contentBase: `${__dirname}/../dist/`,
    historyApiFallback: true,
    watchContentBase: true,
    host: '0.0.0.0',
    port:3035
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
          }
        ]
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
            scss: 'vue-style-loader!css-loader!sass-loader', // <style lang="scss">
            sass: 'vue-style-loader!css-loader!sass-loader?indentedSyntax' // <style lang="sass">
          }
        }
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html'
    }),
    new webpack.HotModuleReplacementPlugin(),
    new VueLoaderPlugin()
  ],
  resolve: {
    extensions: [".vue", ".js", "sass", "css"],
    alias: {
      "vue$": "vue/dist/vue.esm.js"
    }
  },
  performance: { hints: false},
}