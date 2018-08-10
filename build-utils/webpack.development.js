const ErrorOverlayPlugin = require("error-overlay-webpack-plugin");

module.exports = {
    devtool: "inline-source-map",
    plugins: [
        // Shows the errors on the screen so you dont wonder why your code is not working
        new ErrorOverlayPlugin()
    ]
};
