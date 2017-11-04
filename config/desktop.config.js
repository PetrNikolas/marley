//------------------------------------------------------------------------------
// Import webpack, Webpack build for development
//------------------------------------------------------------------------------
const webpack = require('webpack');
const path = require('path');


//------------------------------------------------------------------------------
// Import all plugins
//------------------------------------------------------------------------------
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const WebpackMd5Hash = require('webpack-md5-hash');


//------------------------------------------------------------------------------
// Setup path
//------------------------------------------------------------------------------
const srcDir = 'dist';
const outputDir = 'desktop/dist';


//------------------------------------------------------------------------------
// Webpack module export
//------------------------------------------------------------------------------
module.exports = {
    devtool: "cheap-module-source-map",
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
            '.js', 
            '.css'
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
                test: /\.css$/, 
                use: ExtractTextPlugin.extract({ 
                    fallback: 'style-loader', 
                    use: [
                        { loader: 'css-loader' },
                    ] 
                }) 
            },
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
        new WebpackMd5Hash()
    ]
};
