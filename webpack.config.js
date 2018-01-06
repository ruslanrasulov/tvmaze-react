const webpack = require('webpack');
const path = require('path');

const outputPath = path.resolve(__dirname, 'dist');

const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
    entry: {
        index: './src/js/index.js'
    },
    output: {
        filename: '[name].js',
        path: outputPath
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
        new webpack.HotModuleReplacementPlugin()
    ],
    devServer: {
        contentBase: outputPath,
        port: 3000,
        inline: true,
        hot: true,
        host: '0.0.0.0'
    }
}

module.exports = config;