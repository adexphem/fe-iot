const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const Dotenv = require('dotenv-webpack');

module.exports = {
    entry: {
        app: [
            'react-hot-loader/patch',
            'webpack-dev-server/client?http://localhost:3333',
            'webpack/hot/only-dev-server',
            './src/index.js'
        ]
    },
    output: {
        publicPath: '/',
        filename: 'js/[name].js'
    },
    plugins: [
        new Dotenv({
            path: './.env', 
            safe: true 
        }),
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            template: './index.html',
            inject: 'body'
        }),
        new ExtractTextPlugin('css/[name].css'),
    ],
    module: {
        rules: [{
            test: /\.(js)$/,
            use: 'babel-loader',
            include: path.join(__dirname, 'src'),
        }, {
      test: /\.css$/,
      use: ['css-hot-loader'].concat(ExtractTextPlugin.extract({
        use: 'css-loader'
      })),
    },{
        test: /\.(jpg|png|gif|svg|pdf|ico)$/,
        use: [
            {
                loader: 'file-loader',
                options: {
                    name: '[path][name]-[hash:8].[ext]'
                },
            },
        ]
    },],
    }
};
