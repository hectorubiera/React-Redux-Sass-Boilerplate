let loadedStore = null;

if (process.env.NODE_ENV === "development" && _DEVTOOL) {

    loadedStore = require("./configureStore.dev");

} else {

    loadedStore = require("./configureStore.prod");

}

export const configureStore = loadedStore;
