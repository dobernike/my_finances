module.exports = {
    clearMocks: false,
    testRegex: '(/__tests__/.*|\\.(test|spec))\\.(js|jsx|ts|tsx)$',
    collectCoverageFrom: ['src/**/*.{js,jsx,ts,tsx}'],
    coveragePathIgnorePatterns: ['src/index.tsx'],
    moduleNameMapper: {
        '\\.(css|less|scss|sss|styl)$': '<rootDir>/node_modules/jest-css-modules',
    },
    transform: {
        '^.+\\.(js|jsx|ts|tsx)?$': '<rootDir>/node_modules/babel-jest',
    },
    testPathIgnorePatterns: ['<rootDir>/(node_modules|.vscode)/'],
    setupFilesAfterEnv: ['<rootDir>/src/setupTests.js'],
    preset: 'ts-jest',
};
