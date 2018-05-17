module.exports = {
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  moduleNameMapper: {
    '.*\\.(css|scss)$': 'test/styleMock.ts',
  },
  testPathIgnorePatterns: ['node_modules/', './tests/e2e/', './tests/integration/'],
  setupFiles: ['./tests/setupMongoose.ts', './tests/setupEnzymeAdapter.tsx'],
};
