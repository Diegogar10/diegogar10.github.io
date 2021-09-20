const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const plugins = [
    new HtmlWebpackPlugin({
        inject: true,
        template:'index.html',
        filename:'./index.html'
    }), 
    new MiniCssExtractPlugin(
        {
            filename: 'assets/[name][contenthash].css'
        }
    ),
    /* new CopyPlugin({
        patterns: [
            {
                from: path.resolve(__dirname,"src","assets/images"),
                to: "assets/images"
            }
        ]
    }, 
    ), */
];
const shouldAnalize = process.argv.includes('--analyze');

shouldAnalize ?
    plugins.push(
        new BundleAnalyzerPlugin(
            {
                analyzerPort:5050
            }
        )
    )
    : plugins;

module.exports = {
    entry: './src/assets/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[contenthash].js',
        assetModuleFilename: 'assets/images/[hash][ext][query]'
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
                test:/\.png$/,
            },
            {
                test: /\.s?css$/i,
                use: [MiniCssExtractPlugin.loader,
                'css-loader',
                'sass-loader'
                ],
            },
            {
                test: /\.mp4$/,
                use: [
                    {
                       loader: "file-loader",
                        options: {
                            name: "[name].[ext]",
                            outputPath: "video"
                        }
                    }
                ]
            },
        ] 
    },
    plugins,
    optimization: {
        minimize: true, 
        minimizer: [
            new CssMinimizerPlugin(),
            new TerserPlugin(),
        ],
    }
}