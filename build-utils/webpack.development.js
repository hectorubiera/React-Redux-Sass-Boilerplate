const webpack = require("webpack");
const ErrorOverlayPlugin = require("error-overlay-webpack-plugin");

module.exports = {
    devtool: "inline-source-map",
    plugins: [
        new ErrorOverlayPlugin()
    ]
}