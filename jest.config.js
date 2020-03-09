const path = require('path');

module.exports = {
    clearMocks: false,
    testRegex: '(/__tests__/.*|\\.(test|spec))\\.(js|jsx|ts|tsx)$',
    collectCoverageFrom: ['src/**/*.{js,jsx,ts,tsx}'],
    moduleNameMapper: {
        '\\.(css|less|scss|sss|styl)$': require.resolve('jest-css-modules'),
    },
    transform: {
        '^.+\\.(js|jsx|ts|tsx)?$': require.resolve('babel-jest'),
    },
    setupFilesAfterEnv: [path.resolve(__dirname, 'src/setupTests.js')],
    preset: 'ts-jest',
};
