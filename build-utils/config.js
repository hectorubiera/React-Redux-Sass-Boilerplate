const path = require("path");

const sourceFolder = path.join(__dirname, "..", "src");
const buildFolder = path.join(__dirname, "..", "build");

const config = {
    SOURCE_FOLDER: sourceFolder,
    BUILD_FOLDER: buildFolder,
    CSS_FILE_NAME: "styles.min",
    JS_FILE_NAME: "bundle.min"
}

module.exports = config;