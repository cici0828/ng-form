'use strict';

var path = require('path');

module.exports = {
    entry: {
        index: './ts/main.ts'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: 'dist/'
    },
    module: {
        loaders: [{
            test: /\.ts$/,
            loaders: ['ts', 'angular2-template']
        }, {
            test: /\.html$/,
            loader: 'html'
        } ]
    },
    resolve: {
        extensions: [
            '',
            '.js',
            '.ts'
        ]
    }
};
