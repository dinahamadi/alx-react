const path = require('path');

module.exports = {
    entry: './js/dashboard_main.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'public'),
    },
    mode: 'production',
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(png|jpe?g|gif|svg)$/,
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