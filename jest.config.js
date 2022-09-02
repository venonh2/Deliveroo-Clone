module.exports = {
  preset: "jest-expo",
  testPathIgnorePatterns: ["/node_modules"],
  setupFilesAfterEnv: ["@testing-library/jest-native/extend-expect"],
  moduleNameMapper: {
    "\\.svg": "<rootDir>/src/__mocks__/svgMock.js",
  },
  transformIgnorePatterns: ["node_modules/(?!(jest-)?@?react-native|moti/.*)"],
};
