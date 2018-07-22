const path = require("path");
const webpack = require("webpack");
const merge = require("webpack-merge");
const uglifyJsPlugin = require("uglifyjs-webpack-plugin");
const optimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");

module.exports = {
    devtool: "source-map",
    optimization: {
        minimizer: [
            new uglifyJsPlugin({
                uglifyOptions: {
                    cache: true,
                    parallel: true,
                    sourcemap: true,
                    compress: {
                        inline: false
                    },
                    ecma: 6,
                    output: {
                        comments: false
                    },
                    compress: {
                        dead_code: true,
                        drop_console: true
                    }
                }
            }),
            new optimizeCSSAssetsPlugin()
        ],
        runtimeChunk: false,
        splitChunks: {
            cacheGroups: {
                default: false,
                commons: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendor_app',
                    chunks: 'all',
                    minChunks: 2
                }
            }
        }
    },
    plugins: [
        new webpack.DefinePlugin({
            "process.env": {
                NODE_ENV: JSON.stringify("production")
            }
        })
    ]
};