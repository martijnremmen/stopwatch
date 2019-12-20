'use strict';
const path = require('path');
const miniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {

    entry: ['./src/scripts/app.ts', './src/styles/main.scss'],
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist')
    },

    module: {
        rules: [
            {
                test: /.tsx?$/,
                loader: 'ts-loader',
                exclude: [/node_modules/]
            },

            {
                test: /.html$/,
                loader: 'html-loader',
                options: {
                    minimize: true,
                    collapseWhitespace: true,
                    removeComments: true
                }
            },

            {
                test: /.(s*)css$/,
                use: [
                    {
                        loader: miniCssExtractPlugin.loader
                    },
                    {
                        loader: 'css-loader'
                    },
                    { 
                        loader: 'sass-loader',
                    }
                ],
            }
            
        ]},

    resolve: {
        extensions: [ '.ts', '.tsx', '.js' ],
        alias: {
            vue: 'vue/dist/vue.js'
        }
    },

    plugins: [
        new miniCssExtractPlugin({
            filename: '[name].css',
            chunkFilename: '[id].css',
            ignoreOrder: false
        })
    ]
};