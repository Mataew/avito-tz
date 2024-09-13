const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");
const dotenv = require('dotenv').config({path:'./.env'});

module.exports = {
    entry: "./src/index.jsx",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js",
        publicPath: "/",
        clean: true,
    },
    mode: "development",
    devtool: "inline-source-map",
    devServer: {
        static: "./dist",
        historyApiFallback: true,
        port: 3000,
        hot: true,
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                },
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: "asset/resource",
            },
        ],
    },
    resolve: {
        extensions: [".js", ".jsx"],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./public/index.html",
        }),
        new webpack.DefinePlugin({
            'process.env': JSON.stringify(dotenv.parsed)
        }),
    ],
};
