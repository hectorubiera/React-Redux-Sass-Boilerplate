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
    // hotClient: {
    //     logLevel: "error"
    // },
    // logLevel: "debug",
    // add: (app, middleware, options) => {
    //     app.use(convert(proxy('/v0/**', {
    //         target: "https://api-staging.onerx.com",
    //         changeOrigin: true
    //     })));
    //     app.use(convert(history()));
    // },
    on: {
        "Finished": (server) => {
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