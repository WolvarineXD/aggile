import type { Config } from 'jest';

const config: Config = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  moduleDirectories: ['node_modules', 'src'], // ✅ important for aliases to work
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'], // ✅ or your RTL setup file
  testMatch: ['**/__tests__/**/*.(test|spec).[tj]s?(x)', '**/?(*.)+(test).[tj]s?(x)'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
};

export default config;
