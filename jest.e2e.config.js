module.exports = {
  preset: "jest-puppeteer",
  testEnvironment: "./test/e2eEnvironment.ts",
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  testMatch: ['<rootDir>/tests/e2e/**/*.ts?(x)'],
};
