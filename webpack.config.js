const webpack = require('webpack');
const path = require('path');

const outputPath = path.resolve(__dirname, 'dist');

const Dotenv = require('dotenv-webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
    entry: {
        index: './src/index.js'
    },
    output: {
        filename: '[name].js',
        path: outputPath,
        publicPath: '/'
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader'
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader!resolve-url-loader'
            },
            {
                test: /\.(scss|sass)$/,
                loader: 'style-loader!css-loader!resolve-url-loader!sass-loader'
            },
            {
                test: /\.(gif|png|jpg|jpeg|svg)$/,
                exclude: '/node_modules/',
                loader: 'url-loader?limit=10000&name=images/[name]-[hash].[ext]'
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Tvmaze',
            template: path.join(__dirname, './src/index.html'),
            filename: 'index.html',
            path: outputPath
        }),
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new Dotenv({
            path: './.env',
            systemvars: true
        })
    ],
    devServer: {
        historyApiFallback: true,
        contentBase: outputPath,
        port: 3000,
        inline: true,
        hot: true
    }
}

module.exports = config;