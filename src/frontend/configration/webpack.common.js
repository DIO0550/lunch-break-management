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
               // IMPORTANT for scss (lang="sass") in .vue files
               sass: 'style-loader!css-loader!sass-loader?',
             },
           },
         },
         {
           test: /\.(sass|scss)$/,
           use: [
             'style-loader',
             'css-loader',
             // IMPORTANT for scss files
             { loader: 'sass-loader', options: { includePaths: ['nodeModules'] } },
           ],
         },
         {
           test: /\.css$/,
           use: ['style-loader', 'css-loader'],
         },
       ],
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