const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin')

const production = process.env.NODE_ENV === 'production';

const config = {
    entry: {
        app: './src/index.js'
    },
    output: {
        path: path.resolve('build'),
        filename: 'js/[name].js',
        chunkFilename: 'js/[name].[chunkhash:3].js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: [
                    MiniCssExtractPlugin.loader,
                    { loader: "css-loader", options: { url: false } },
                    "postcss-loader"
                ],
            },
        ],
    },
    devServer: {
        static: {
            directory: path.join(__dirname, 'build'),
        },
        watchFiles: ['src/*'],
        compress: true,
        port: 8080,
    },
    watchOptions: {
        aggregateTimeout: 200
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'css/[name].css'
        }),
        new HtmlWebpackPlugin({
            template: 'src/index.html'
        }),
    ],
    mode: production ? 'production' : 'development',
    stats: production ? 'normal' : 'minimal'
};


module.exports = config;