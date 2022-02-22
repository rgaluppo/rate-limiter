// For a detailed explanation regarding each configuration property, visit:
// https://jestjs.io/docs/en/configuration.html
module.exports = {
  moduleFileExtensions: ['ts', 'js', 'json'],

  // Automatically clear mock calls and instances between every test
  clearMocks: true,

  // Indicates whether the coverage information should be collected while executing the test
  collectCoverage: false,

  // A preset that is used as a base for Jest's configuration
  preset: 'ts-jest',

  // The glob patterns Jest uses to detect test files
  testMatch: ['**/?(*.)+(spec|test).[t]s?(x)'],

  // An array of regexp pattern strings that are matched against all test paths, matched tests are skipped
  testPathIgnorePatterns: ['/node_modules/', '/dist/', '/config/']
}
