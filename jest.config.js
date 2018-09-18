module.exports = {
  transform: {
    '^.+\\.tsx?$': 'ts-jest'
  },
  testRegex: '.spec\.ts$',
  testRegex: !!process.env.IS_HEROKU
    ? '^(?!repository)\.spec\.ts$'
    : '.spec\.ts$',
  coverageDirectory: './coverage/',
  coveragePathIgnorePatterns: [
    '.d.ts$',
    '.spec.ts',
    'src/index.ts',
    'src/config',
    'connection/database',
    'connection/server',
  ],
  collectCoverageFrom : ['src/**/*.ts'],
  moduleFileExtensions: [
    'ts',
    'js',
    'json'
  ],
  globals: {
    'ts-jest': {
      tsConfigFile: './tsconfig.json',
    }
  }
};
