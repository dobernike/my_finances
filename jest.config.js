module.exports = {
    clearMocks: false,
    testRegex: '(/__tests__/.*|\\.(test|spec))\\.(js|jsx|ts|tsx)$',
    collectCoverageFrom: ['src/**/*.(js|jsx|ts|tsx)'],
    coveragePathIgnorePatterns: ['src/index.tsx'],
    moduleNameMapper: {
        '\\.(css|less|scss|sss|styl)$': 'jest-css-modules',
    },
    transform: {
        '^.+\\.(js|jsx)?$': 'babel-jest',
        '^.+\\.(ts|tsx)?$': 'ts-jest',
    },
    testPathIgnorePatterns: ['<rootDir>/(node_modules|.vscode)/'],
    setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
};
