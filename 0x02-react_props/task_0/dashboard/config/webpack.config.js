const path = require("path");

module.exports = {
    mode: "development",
    devtool: "inline-source-map",
    entry: "./src/index.js",
    output: {
        filename: "bundle.js",
        path: path.resolve("./dist"),
    },
    devServer: {
    hot: true,
    static: {
        directory: path.resolve("./dist"),
    },
    compress: true,
    port: 3030,
},
    performance: {
        maxAssetSize: 1000000,
        maxEntrypointSize: 1000000,
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: "babel-loader",
            },
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.(gif|png|jpe?g|svg)$/i,
                use: [
                    "file-loader",
                    {
                        loader: "image-webpack-loader",
                        options: {
                            bypassOnDebug: true, 
                            disable: true, 
                        },
                    },
                ],
            },
        ],
    },
};