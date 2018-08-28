if (process.env.NODE_ENV === "development") {
    module.exports = require("./Root.dev.js");
} else {
    module.exports = require("./Root.prod.js");
}
