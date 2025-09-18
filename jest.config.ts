export default {
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  moduleNameMapper: {
    '\\.(css|less|sass|scss)$': 'identity-obj-proxy',
    '^.+\\.svg$': 'jest-transformer-svg',
    '^@components(.*)$': '<rootDir>/src/components$1',
    '^@hooks(.*)$': '<rootDir>/src/hooks$1',
    '^@contexts(.*)$': '<rootDir>/src/contexts$1',
    '^@styles(.*)$': '<rootDir>/src/styles$1',
    '^@types(.*)$': '<rootDir>/src/types$1',
    '^@redux(.*)$': '<rootDir>/src/redux$1',
    '^@utils(.*)$': '<rootDir>/src/utils$1',
    '^@resources(.*)$': '<rootDir>/src/resources$1',
  },
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  // moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
}
