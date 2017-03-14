/*
    ./webpack.config.js
*/
var webpack = require('webpack');
const path = require('path');
module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve('public/build'),
        filename: 'bundle.js'
    },
    module: {
        loaders: [{
                test: /\.js$/,
                exclude: /(node_modules)/,
                loader: 'babel-loader',
                query: {
                    presets: ["react", "es2015"]
                }
            }

        ]
    }
}