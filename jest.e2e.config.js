module.exports = {
  preset: "jest-puppeteer",
  testEnvironment: "./tests/e2eEnvironment.ts",
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  testMatch: ['<rootDir>/tests/e2e/**/*.ts?(x)'],
};
