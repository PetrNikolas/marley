//------------------------------------------------------------------------------
// Import webpack, Webpack build for development
//------------------------------------------------------------------------------
const webpack = require('webpack');
const path = require('path');


//------------------------------------------------------------------------------
// Setup path
//------------------------------------------------------------------------------
const srcDir = 'dist';
const outputDir = 'desktop/dist';


//------------------------------------------------------------------------------
// Webpack module export
//------------------------------------------------------------------------------
module.exports = {
    entry: {
        inline: [
            path.resolve(srcDir, 'inline.bundle.js')
        ],
        polyfills: [
            path.resolve(srcDir, 'polyfills.bundle.js')
        ],
        styles: [
            path.resolve(srcDir, 'styles.bundle.js')
        ],
        vendor: [
            path.resolve(srcDir, 'vendor.bundle.js')
        ],
        main: [
            path.resolve(srcDir, 'main.bundle.js')
        ]
    },
    output: {
        path: path.resolve(outputDir),
        filename: '[name].bundle.js',
        sourceMapFilename: '[name].map',
    },
    resolve: {
        extensions: [
            '.js'
        ]
    },
    module: {
        rules: []
    }
};
