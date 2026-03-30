import { createDefaultEsmPreset } from "ts-jest";

const presetConfig = createDefaultEsmPreset({});

export default {
  ...presetConfig,
  testEnvironment: 'node',
  testMatch: [
    '**/tests/**/*.test.ts',
    '**/__tests__/**/*.test.ts',
    '**/?(*.)+(spec|test).ts'
  ],
  moduleNameMapper: {
    "^(\\.{1,2}/.*)\\.[jt]s$": "$1",
  },
  collectCoverage: true,
  coverageReporters: ['html','lcov', 'text', 'text-summary'],
  testTimeout: 30000,
};