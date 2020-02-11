const path = require('path');

module.exports = {
    clearMocks: false,
    testRegex: '(/__tests__/.*|\\.(test|spec))\\.(js|jsx|ts|tsx)$',
    collectCoverageFrom: ['src/components/**/*.{js,jsx,ts,tsx}'],
    moduleNameMapper: {
        '\\.(css|less|scss|sss|styl)$': require.resolve('jest-css-modules'),
    },
    setupFilesAfterEnv: [path.resolve(__dirname, 'src/setupTests.js')],
};
