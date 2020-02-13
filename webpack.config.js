const webpack = require('webpack');
const path = require('path');
const postcssNesting = require('postcss-nested');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { TypedCssModulesPlugin } = require('typed-css-modules-webpack-plugin');
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');
const PnpWebpackPlugin = require(`pnp-webpack-plugin`);

const isDev = process.env.NODE_ENV === 'development';
const isProd = !isDev;

const isModern = process.env.BROWSERSLIST_ENV === 'modern';
const buildRoot = path.resolve(__dirname, 'dist');

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
            loader: require.resolve('css-loader'),
            options: {
                importLoaders: 1,
                modules: {
                    localIdentName: '[name]__[hash:base64:5]',
                },
            },
        },
        {
            loader: require.resolve('postcss-loader'),
            options: {
                ident: require.resolve('postcss'),
                plugins: () => [postcssNesting()],
            },
        },
    ];

    return loaders;
};

const babelOptions = (...presets) => {
    const opts = {
        presets: [isModern ? require.resolve('@babel/preset-modules') : require.resolve('@babel/preset-env')],
        plugins: [require.resolve('@babel/plugin-proposal-class-properties')],
    };

    if (presets) {
        for (let preset of presets) {
            opts.presets.push(preset);
        }
    }

    return opts;
};

const jsLoaders = () => {
    const loaders = [
        require.resolve('thread-loader'),
        {
            loader: require.resolve('babel-loader'),
            options: babelOptions(),
        },
    ];

    if (isDev) {
        loaders.push(require.resolve('eslint-loader'));
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
                to: path.resolve(__dirname, 'dist'),
            },
        ]),
        new MiniCssExtractPlugin({
            filename: filename('css'),
        }),
        new TypedCssModulesPlugin({
            globPattern: 'src/**/*.css',
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
        path: buildRoot + (isModern ? '/modern' : '/legacy'),
        filename: filename('js'),
    },
    resolve: {
        plugins: [PnpWebpackPlugin],
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
    },
    resolveLoader: {
        plugins: [PnpWebpackPlugin.moduleLoader(module)],
    },
    optimization: optimization(),
    devServer: {
        port: 4200,
        hot: isDev,
    },
    devtool: isDev ? require.resolve('source-map') : '',
    plugins: plugins(),
    module: {
        rules: [
            {
                test: /\.css$/,
                use: cssLoaders(),
            },
            {
                test: /\.(png|jpg|svg|gif)$/,
                use: [require.resolve('file-loader')],
            },
            {
                test: /\.(ttf|woff|woff2|eot)$/,
                use: [require.resolve('file-loader')],
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: jsLoaders(),
            },
            {
                test: /\.ts$/,
                exclude: /node_modules/,
                use: [
                    require.resolve('thread-loader'),
                    {
                        loader: require.resolve('babel-loader'),
                        options: babelOptions('@babel/preset-typescript'),
                    },
                ],
            },
            {
                test: /\.jsx$/,
                exclude: /node_modules/,
                use: [
                    require.resolve('thread-loader'),
                    {
                        loader: require.resolve('babel-loader'),
                        options: babelOptions('@babel/preset-react'),
                    },
                ],
            },
            {
                test: /\.tsx$/,
                exclude: /node_modules/,
                use: [
                    require.resolve('thread-loader'),
                    {
                        loader: require.resolve('babel-loader'),
                        options: babelOptions('@babel/preset-react', '@babel/preset-typescript'),
                    },
                ],
            },
        ],
    },
};
