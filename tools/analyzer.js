//------------------------------------------------------------------------------
// Import webpack, Webpack build for development
//------------------------------------------------------------------------------
const webpack = require('webpack');
const path = require('path');


//------------------------------------------------------------------------------
// Import all plugins
//------------------------------------------------------------------------------
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const OptimizeJsPlugin = require("optimize-js-plugin");
const CompressionPlugin = require('compression-webpack-plugin');
const ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin');
const WebpackCleanupPlugin = require('webpack-cleanup-plugin');
const autoprefixer = require('autoprefixer');
const poststylus = require('poststylus');
const WebpackMd5Hash = require('webpack-md5-hash');
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
        vendor: [
            path.resolve(pathDir, 'vendor.bundle.js')
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
        ],
        alias: {
            'webworkify': 'webworkify-webpack',
            'mapbox-gl': path.resolve('./node_modules/mapbox-gl/dist/mapbox-gl.js'),
            '@mapbox/mapbox-gl-draw': path.resolve('./node_modules/@mapbox/mapbox-gl-draw/dist/mapbox-gl-draw.js')
        }
    },
    module: {
        rules: [
            { 
                test: /\.(png|gif|jpg)$/, 
                use: [
                    { 
                        loader: 'file-loader', 
                        options: { name: 'images/[name].[ext]' } 
                    }
                ] 
            },
            { 
                test: /\.woff(\?v=\d+\.\d+\.\d+)?$/, 
                use: [
                    { 
                        loader: 'file-loader', 
                        options: { name: 'fonts/[name].[ext]' } 
                    }
                ] 
            },
            { 
                test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/, 
                use: [
                    { 
                        loader: 'file-loader', 
                        options: { name: 'fonts/[name].[ext]' } 
                    }
                ] 
            },
            { 
                test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, 
                use: [
                    { 
                        loader: 'file-loader', 
                        options: { name: 'fonts/[name].[ext]' } 
                    }
                ] 
            },
            { 
                test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, 
                use: [
                    { 
                        loader: 'file-loader', 
                        options: { name: 'fonts/[name].[ext]' } 
                    }
                ] 
            },
            { 
                test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, 
                use: [
                    { 
                        loader: 'file-loader', 
                        options: { name: 'fonts/[name].[ext]' } 
                    }
                ] 
            },
            {
                enforce: 'post',
                include: /node_modules\/mapbox-gl-shaders/,
                loader: 'transform',
                query: 'brfs'
            }
        ],
        noParse: [
            path.join(__dirname, 'node_modules', 'angular2', 'bundles')
        ]
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
