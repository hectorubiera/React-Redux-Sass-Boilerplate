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
                        inline: false,
                        dead_code: true,
                        drop_console: true
                    },
                    ecma: 6,
                    output: {
                        comments: false
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
                    name: "vendor_app",
                    chunks: "all",
                    minChunks: 2
                }
            }
        }
    }
};
