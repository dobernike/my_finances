const webpack = require('webpack');
const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');
const postcssCustomMedia = require('postcss-custom-media');
const postcssNesting = require('postcss-nested');

const isDev = process.env.NODE_ENV === 'development';
const isProd = !isDev;
const isModern = process.env.BROWSERSLIST_ENV === 'modern';

const optimization = () => {
    const config = {
        splitChunks: {
            chunks: 'all',
        },
    };

    if (isProd) {
        config.minimizer = [
            new OptimizeCssAssetsWebpackPlugin(),
            isModern
                ? new TerserWebpackPlugin({
                      terserOptions: {
                          ecma: 8,
                          safari10: true,
                      },
                  })
                : new TerserWebpackPlugin(),
        ];
    }

    return config;
};

const filename = (ext) => (isDev ? `[name].${ext}` : `[name].[hash].${ext}`);

const cssLoaders = () => {
    const loaders = [
        {
            loader: MiniCssExtractPlugin.loader,
            options: {
                hrm: isDev,
                reloadAll: true,
            },
        },
        {
            loader: 'css-loader',
            options: {
                importLoaders: 1,
                modules: {
                    localIdentName: isDev ? '[name]__[local]--[hash:base64:5]' : '[hash:base64:5]',
                },
            },
        },
        {
            loader: 'postcss-loader',
            options: {
                ident: 'postcss',
                plugins: () => [
                    postcssCustomMedia({ importFrom: './src/constants/breakpoints.css' }),
                    postcssNesting(),
                ],
            },
        },
    ];

    return loaders;
};

const babelOptions = (presets) => {
    const opts = {
        presets: [isModern ? '@babel/preset-modules' : '@babel/preset-env'],
        plugins: ['@babel/plugin-proposal-class-properties'],
    };

    if (presets) {
        for (let preset of presets) {
            opts.presets.push(preset);
        }
    }

    return opts;
};

const jsLoaders = (...presets) => {
    const loaders = [
        'thread-loader',
        {
            loader: 'babel-loader',
            options: babelOptions(presets),
        },
    ];

    if (isDev) {
        loaders.push('eslint-loader');
    }

    return loaders;
};

const plugins = () => {
    const base = [
        new HTMLWebpackPlugin({
            template: '../public/index.html',
            minify: {
                collapseWhitespace: isProd,
            },
        }),
        new CleanWebpackPlugin(),
        new CopyWebpackPlugin([
            {
                from: path.resolve(__dirname, 'public/favicon.ico'),
                to: path.resolve(__dirname, isModern ? 'dist/modern' : 'dist/legacy'),
            },
            {
                from: path.resolve(__dirname, 'public/critical.css'),
                to: path.resolve(__dirname, isModern ? 'dist/modern' : 'dist/legacy'),
            },
        ]),
        new MiniCssExtractPlugin({
            filename: filename('css'),
        }),
        new webpack.HashedModuleIdsPlugin({
            hashFunction: 'md4',
            hashDigest: 'base64',
            hashDigestLength: 4,
        }),
    ];

    return base;
};

module.exports = {
    context: path.resolve(__dirname, 'src'),
    mode: 'development',
    entry: {
        main: [
            isModern ? path.resolve(__dirname, 'polyfills.modern.js') : path.resolve(__dirname, 'polyfills.legacy.js'),
            './index.tsx',
        ],
    },
    output: {
        path: path.resolve(__dirname, 'dist') + (isModern ? '/modern' : '/legacy'),
        filename: filename('js'),
        publicPath: '/',
    },
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
    },
    optimization: optimization(),
    devServer: {
        port: 4200,
        hot: isDev,
        historyApiFallback: true,
    },
    devtool: isDev ? 'source-map' : '',
    plugins: plugins(),
    module: {
        rules: [
            {
                test: /\.css$/,
                use: cssLoaders(),
            },
            {
                test: /\.(png|jpg|svg|gif)$/,
                use: ['file-loader'],
            },
            {
                test: /\.(ttf|woff|woff2|eot)$/,
                use: ['file-loader'],
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: jsLoaders(),
            },
            {
                test: /\.ts$/,
                exclude: /node_modules/,
                use: jsLoaders('@babel/preset-typescript'),
            },
            {
                test: /\.jsx$/,
                exclude: /node_modules/,
                use: jsLoaders('@babel/preset-react'),
            },
            {
                test: /\.tsx$/,
                exclude: /node_modules/,
                use: jsLoaders('@babel/preset-react', '@babel/preset-typescript'),
            },
        ],
    },
};
