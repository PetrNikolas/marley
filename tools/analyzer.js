//------------------------------------------------------------------------------
// Import webpack, Webpack build for development
//------------------------------------------------------------------------------
const webpack = require('webpack');
const path = require('path');


//------------------------------------------------------------------------------
// Import all plugins
//------------------------------------------------------------------------------
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;


//------------------------------------------------------------------------------
// Setup path
//------------------------------------------------------------------------------
const pathDir = 'dist';


//------------------------------------------------------------------------------
// Webpack module export
//------------------------------------------------------------------------------
module.exports = {
    entry: {
        inline: [
            path.resolve(pathDir, 'inline.bundle.js')
        ],
        polyfills: [
            path.resolve(pathDir, 'polyfills.bundle.js')
        ],
        styles: [
            path.resolve(pathDir, 'styles.bundle.js')
        ],
        main: [
            path.resolve(pathDir, 'main.bundle.js')
        ]
    },
    output: {
        path: path.resolve(pathDir),
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
    },
    plugins: [
        new BundleAnalyzerPlugin({
            analyzerMode: 'server',
            analyzerHost: '127.0.0.1',
            analyzerPort: 8888,
            reportFilename: 'report.html',
            defaultSizes: 'parsed',
            openAnalyzer: true,
            generateStatsFile: false,
            statsFilename: 'stats.json',
            statsOptions: null,
            logLevel: 'info'
        })
    ]
};
