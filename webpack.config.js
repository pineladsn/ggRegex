'use strict'

const path = require('path');

module.exports = {
    entry: [
        "core-js/modules/es.promise",
        "core-js/modules/es.array.iterator",
        path.join(__dirname, 'src', 'index'),
    ],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'gg-regex.js',
        publicPath: '/dist/'
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            include: /src/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env']
                }
            }
        }]
    },
    devtool: 'source-map',
    watch: true
}