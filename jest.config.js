module.exports = {
  "roots": [
      "<rootDir>"
  ],
  "testMatch": [
      "**/__tests__/**/*.ts",
      "**/?(*.)+spec.ts"
  ],
  "transform": {
      "^.+\\.ts$": "ts-jest"
  },
  "coverageReporters": [
      "lcov", "clover", "text-summary"
  ]
};