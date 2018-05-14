module.exports = {
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  moduleNameMapper: {
    '.*\\.(css|scss)$': 'test/styleMock.ts',
  },
  testPathIgnorePatterns: ['node_modules/', './test/e2e/', './test/integration/'],
  setupFiles: ['./test/setupMongoose.ts', './test/setupEnzymeAdapter.tsx'],
};
