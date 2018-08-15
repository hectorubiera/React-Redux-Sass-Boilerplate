const webpack = require("webpack");
const path = require("path");
const webpackMerge = require("webpack-merge");
const htmlWebPackPlugin = require("html-webpack-plugin");
const autoPrefixer = require("autoprefixer");
const eyeglass = require("eyeglass");
const miniCssExtractPlugin = require("mini-css-extract-plugin");
const styleLintPlugin = require("stylelint-webpack-plugin");
const cleanWebpackPlugin = require("clean-webpack-plugin");

const webpackConfig = require("./config");
const webpackConfigFile = require(`./webpack.${process.env.MODE}`);

module.exports = webpackMerge(webpackConfigFile, {
    mode: process.env.MODE,
    entry: [
        `${webpackConfig.SOURCE_FOLDER}/app/index.js`,
        `${webpackConfig.SOURCE_FOLDER}/sass/styles.scss`
    ],
    output: {
        path: webpackConfig.BUILD_FOLDER,
        filename:
            process.env.MODE === "development"
                ? `js/${webpackConfig.JS_FILE_NAME}.js`
                : `js/${webpackConfig.JS_FILE_NAME}.[hash:7].js`
    },
    module: {
        rules: [
            {
                // JS Linter
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                enforce: "pre",
                use: [
                    {
                        loader: "eslint-loader",
                        options: {
                            fix: true,
                            failOnWarning: false,
                            failOnError:
                                process.env.MODE === "development"
                                    ? false
                                    : true
                        }
                    }
                ]
            },
            {
                // JS Compiler
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: "babel-loader"
                    }
                ]
            },
            {
                // SASS Compiler
                test: /\.scss$/,
                use: [
                    process.env.MODE === "development"
                        ? "style-loader"
                        : miniCssExtractPlugin.loader,
                    {
                        loader: "css-loader",
                        options: {
                            sourceMap: true,
                            minimize:
                                process.env.MODE === "development"
                                    ? false
                                    : true
                        }
                    },
                    {
                        loader: "postcss-loader",
                        options: {
                            ident: "postcss",
                            plugins: [
                                autoPrefixer({
                                    browsers: ["last 3 versions", "> 1%"]
                                })
                            ],
                            sourceMap: true
                        }
                    },
                    {
                        loader: "sass-loader",
                        options: eyeglass({
                            errLogToConsole: true,
                            includePaths: "../node_modules",
                            sourceMap: true
                        })
                    }
                ]
            },
            {
                // Fonts loader
                test: /\.(ttf|eot|svg|woff2?)(\?v=[a-z0-9=\.]+)?$/i,
                loader: "file-loader",
                options: {
                    name:
                        process.env.MODE === "development"
                            ? "css/fonts/[name].[ext]"
                            : "css/fonts/[name].[hash:7].[ext]",
                    publicPath(url) {
                        return url.replace("css/", "");
                    }
                }
            },
            {
                // Image loader
                test: /\.(jpe?g|png|svg|gif|ico)$/i,
                exclude: `${webpackConfig.SOURCE_FOLDER}/sass/fonts/`,
                loader: "file-loader",
                options: {
                    name:
                        process.env.MODE === "development"
                            ? "[name].[ext]"
                            : "[name].[hash:7].[ext]",
                    outputPath:
                        process.env.MODE === "development" ? "" : "images/",
                    publicPath: "/"
                }
            },
            {
                // File loader
                test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
                loader: "url-loader",
                options: {
                    limit: 10000,
                    name:
                        process.env.MODE === "development"
                            ? "media/[name].[ext]"
                            : "media/[name].[hash:7].[ext]",
                    outputPath:
                        process.env.MODE === "development" ? "" : "media/",
                    publicPath: "/"
                }
            }
        ]
    },
    plugins: [
        // Deletes the files from the build folder
        new cleanWebpackPlugin([webpackConfig.BUILD_FOLDER], {
            root: path.resolve(__dirname, "..")
        }),

        // Generates the index.html page for the app to use
        new htmlWebPackPlugin({
            inject: false,
            template: require("html-webpack-template"),
            appMountId: "main-app-wrapper"
        }),

        // Lints the SCSS files
        new styleLintPlugin({
            configFile: path.resolve(__dirname, "..", ".stylelintrc"),
            failOnError: process.env.MODE === "development" ? false : true
        }),

        // Generate an external CSS file in production build
        new miniCssExtractPlugin({
            filename: `css/${webpackConfig.CSS_FILE_NAME}.[hash:7].css`
        }),

        // Defines variables that can be used in your app
        new webpack.DefinePlugin({
            NODE_ENV: JSON.stringify(process.env.MODE)
        })
    ]
});
