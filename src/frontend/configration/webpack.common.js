const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { VueLoaderPlugin } = require("vue-loader");


module.exports = {
    entry: [
        './ts/index.ts'
    ],
    output: {
        path: `${__dirname}/../dist/`,
        filename: 'build.js'
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
                test: /\.(ts|tsx)?(\.erb)?$/,
                use: [{
                    loader: 'ts-loader',
                    options: {
                        appendTsSuffixTo: [/\.vue$/]
                    }
                }]
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
            template: './static/index.html',
            filename: 'index.html'
        }),
        new webpack.HotModuleReplacementPlugin(),
        new VueLoaderPlugin()
    ],
    resolve: {
        extensions: [".vue", ".js", "sass", "css", "ts", "scss"],
        alias: {
            "vue$": "vue/dist/vue.esm.js"
        }
    },
    performance: { hints: false },
}