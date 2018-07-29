module.exports = {
  globals: {
    '__TS_CONFIG__': {
      'target': 'es5',
      'module': 'es6',
      'moduleResolution': 'node'
    },
    'ts-jest': {
      tsConfigFile: 'src/tsconfig.spec.json',
    },
    __TRANSFORM_HTML__: true,
  },
  roots: [
    '<rootDir>/src'
  ],
  transform: {
    '^.+\\.(ts|js|html)$': '<rootDir>/node_modules/jest-preset-angular/preprocessor.js',
  },
  collectCoverageFrom: [
    '!src/app/*.{ts}',
    '!src/app/**/*.{js}',
    '!src/app/store/*.{ts}',
    '!src/app/**/*.module.{ts}',
    '!src/app/**/*.interface.{ts}',
    '!src/app/**/*.state.{ts}',
    '!src/app/**/*.entity.{ts}'
  ],
  moduleFileExtensions: [
    'ts',
    'js',
    'html', 
    'tsx',
    'json'
  ],
  preset: 'jest-preset-angular',
  setupTestFrameworkScriptFile: '<rootDir>/src/jest-setup.ts',
  coveragePathIgnorePatterns: [
    '<rootDir>/node_modules/',
    '<rootDir>/src/.*(/__tests__/.*|\\.(test|spec))\\.(ts|tsx|js)$',
    'src/(jest-setup|jest-global-mocks).ts',
  ],
  testPathIgnorePatterns: [
    '/node_modules/',
    '/dist/',
    'src/app/*.{js}'
  ],
  transformIgnorePatterns: ['node_modules/(?!@ngrx)'],
  testResultsProcessor: 'jest-sonar-reporter',
}