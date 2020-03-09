module.exports = (api) => {
    const isTest = api.env('test');

    if (isTest) {
        return {
            plugins: ['@babel/plugin-proposal-class-properties'],
            presets: [
                '@babel/preset-typescript',
                ['@babel/preset-env', { targets: { node: 'current' } }],
                '@babel/preset-react',
            ],
        };
    }

    return {};
};
