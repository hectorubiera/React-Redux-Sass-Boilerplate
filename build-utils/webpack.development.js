const webpack = require("webpack");
const ErrorOverlayPlugin = require("error-overlay-webpack-plugin");

module.exports = {
    devtool: "source-map",
    plugins: [
        new ErrorOverlayPlugin()
    ]
}