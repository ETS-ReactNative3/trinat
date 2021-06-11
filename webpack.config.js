/**
* SIA Trinat restaurant project
* Copyright © winniepukki. All rights reserved.
*
* @license MIT
*/
const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const PORT = 4000;
const paths = {
    src: path.join(__dirname, './src'),
    dist: path.join(__dirname, './dist'),
    public: path.join(__dirname, './src/public'),
    assets: path.join(__dirname, './src/public/assets'),
    components: path.resolve(__dirname, './src/app/components'),
    store: path.resolve(__dirname, './src/app/store'),
    util: path.resolve(__dirname, './src/app/util')
};

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[hash].js'
    },
    mode: 'development',
    externals: {
        paths
    },
    devServer: {
        port: PORT,
        contentBase: paths.dist,
        open: true
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                vendor: {
                    name: 'vendors',
                    test: /node_modules/,
                    chunks: 'all',
                    enforce: true
                }
            }
        }
    },
    resolve: {
        alias: {
            '@components': paths.components,
            '@store': paths.store,
            '@util': paths.util
        }
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash].css'
        }),
        new HTMLWebpackPlugin({
            template: './src/public/index.html',
            filename: './index.html'
        }),
        new CopyWebpackPlugin({
            patterns: [
                { from: './src/public/assets/images/', to: 'assets/img' },
                { from: './src/public/assets/favicon', to: 'assets/favicon' },
                { from: './src/public/manifest.json', to: './[name].[ext]' }
            ]
        })
    ],
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.(scss|css)$/,
                use: [
                    'style-loader',
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            esModule: false
                        }
                    },
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.(woff(2)?|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]'
                }
            },
            {
                test: /\.(png|jpg|gif)$/,
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]'
                }
            },
            {
                test: /\.svg$/,
                use: [
                    {
                        loader: 'svg-url-loader',
                        options: {
                            limit: 1000
                        }
                    }
                ]
            },
            {
                test: /\.html$/,
                use: {
                    loader: 'html-loader'
                }
            }
        ]
    }
};
