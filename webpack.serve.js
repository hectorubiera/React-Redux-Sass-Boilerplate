const util = require("util");
const serve = require("webpack-serve");

// const convert = require('koa-connect');
// const history = require('connect-history-api-fallback');
// const proxy = require('http-proxy-middleware');

const webpackConfig = require("./build-utils/webpack.base.config.js");

let serverConfig = {
    host: "localhost",
    port: 3000,
    config: webpackConfig,
    hotClient: {
        logLevel: "error"
    },
    logLevel: "debug",
    // add: (app, middleware, options) => {
    //     app.use(convert(proxy(
    //     'API_PATH_TO_SEARCH', {
    //         target: API_URL,
    //         changeOrigin: true
    //     })));
    //     app.use(convert(history()));
    // },
    on: {
        "finished": (server) => {
            console.log(
                util.inspect("Happy Coding!", {
                    colors: true,
                    depth: 0
                })
            );
        }
    }
};

serve({}, serverConfig);