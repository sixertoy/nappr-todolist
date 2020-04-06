module.exports = {
  collectCoverageFrom: [
    '<rootDir>/src/**.{js}',
    '!<rootDir>/node_modules/',
    '!<rootDir>/lib/',
    '!<rootDir>/dist/',
    '!<rootDir>/docs/',
    '!<rootDir>/demo/',
  ],
  moduleFileExtensions: ['js'],
  // setupFiles: ['<rootDir>/jest-polyfill.js', '<rootDir>/jest.setup.js'],
  testEnvironment: 'jest-environment-jsdom',
  testMatch: ['<rootDir>/lib/**/?(*.)(spec).{js,jsx}'],
  testURL: 'http://localhost',
  transform: {
    '^.+\\.(js|jsx)$': '<rootDir>/node_modules/babel-jest',
    '^.+\\.js$': 'babel-jest',
  },
  transformIgnorePatterns: [
    '<rootDir>/node_modules/',
    '[/\\\\]node_modules[/\\\\].+\\.(js|jsx)$',
  ],
  verbose: true,
};
