const merge = require('webpack-merge');
const common = require('./webpack.common');

module.exports = merge(common, {
    mode: 'development',
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
})