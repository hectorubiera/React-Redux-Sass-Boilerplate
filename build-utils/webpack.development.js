const webpack = require("webpack");
const ErrorOverlayPlugin = require("error-overlay-webpack-plugin");

module.exports = {
    devtool: "inline-source-map",
    plugins: [
        new ErrorOverlayPlugin(),

        new webpack.DefinePlugin({
            "process.env": {
                NODE_ENV: JSON.stringify("development")
            }
        })
    ]
}