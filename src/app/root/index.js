let loadedModule = null;

if (process.env.NODE_ENV === "development") {
    loadedModule = require("./Root.dev.js");
} else {
    loadedModule = require("./Root.prod.js");
}

export const Root = loadedModule;
