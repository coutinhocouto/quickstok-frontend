module.exports = {
  clearMocks: true,
  verbose: true,
  testEnvironment: 'jest-environment-jsdom',
  preset: "ts-jest",
  testPathIgnorePatterns: ['/node_modules/', '/.next/', '/public/', '/e2e/'],
  collectCoverage: true,
  collectCoverageFrom: [
    "src/**/*.{ts,tsx}",
    "!**/node_modules/**"
  ],
  coverageReporters: ['cobertura', 'json', 'lcov', 'text'],
  setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts'],
  moduleDirectories: ['node_modules', './src'],
  modulePaths: ['<rootDir>/src'],
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx'],
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': ['babel-jest', { presets: ['next/babel'] }],
    '.+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$': 'jest-transform-stub',
  },
  transformIgnorePatterns: ['/node_modules/(?!antd|@ant-design|rc-.+?|@babel/runtime).+(js|jsx)$'],
  moduleNameMapper: {
    '@/components/(.*)': '<rootDir>/src/components/$1',
    '@/auth/(.*)': '<rootDir>/src/auth/$1',
    '@/hooks/(.*)': '<rootDir>/src/hooks/$1',
    '@/styles/(.*)': '<rootDir>/src/styles/$1',
    '@/utils/(.*)': '<rootDir>/src/utils/$1'
  },
};
