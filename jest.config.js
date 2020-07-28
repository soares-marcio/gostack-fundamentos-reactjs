module.exports = {
  preset: 'ts-jest',
  moduleNameMapper: {
    ".+\\.(svg|png|jpg)$": "<rootDir>/empty-module.js"
  },
};
