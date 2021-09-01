const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: './src/assets/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js',
    },
    resolve: {
        extensions: ['.js'] 
    },
    module: 
    {
        rules:[
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader,
                'css-loader'
                ],
            }
        ] 
    },
    plugins:[
        new HtmlWebpackPlugin({
            inject: true,
            template:'index.html',
            filename:'./index.html'
        }), 
        new MiniCssExtractPlugin(), 
    ],
}