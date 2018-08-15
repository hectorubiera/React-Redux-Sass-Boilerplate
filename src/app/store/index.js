let loadedStore = null;

if (process.env.NODE_ENV === "development") {
    loadedStore = require("./configureStore.dev");
} else {
    loadedStore = require("./configureStore.prod");
}

export const configureStore = loadedStore;
