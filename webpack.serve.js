const util = require("util");
const serve = require("webpack-serve");

const convert = require("koa-connect");
const history = require("connect-history-api-fallback");
/**
 * Uncomment the code below and install "npm i -D http-proxy-middleware"
 * to take advantage of proxy middleware
 */
// const proxy = require('http-proxy-middleware');

const webpackConfig = require("./build-utils/webpack.base.js");

const host = "localhost";
const port = 3000;

let serverConfig = {
    host: host,
    port: port,
    config: webpackConfig,
    hotClient: {
        logLevel: "error"
    },
    add: (app, middleware, options) => {
        /**
         * Uncomment the code below if you want to use an external API
         */
        // app.use(convert(proxy(
        // 'API_PATH_TO_SEARCH', {
        //     target: API_URL,
        //     changeOrigin: true
        // })));
        app.use(convert(history()));
    }
};

serve({}, serverConfig);
