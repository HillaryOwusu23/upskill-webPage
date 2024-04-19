// eslint-disable-next-line no-undef
module.exports = {
  // Specify the test environment
  testEnvironment: "jest-environment-jsdom",

  // Setup files before running tests
  setupFilesAfterEnv: ["<rootDir>/setupTests.ts"],

  // Transform files with ts-jest
  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },

  // Test file extensions
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],

  // Other configuration options...
};
