module.exports = {
  testEnvironment: "jsdom",
  setupFiles: ["<rootDir>/jest.setup.js"],   // 👈 IMPORTANT
  setupFilesAfterEnv: ["<rootDir>/src/setupTests.js"],
  moduleNameMapper: {
    "\\.(css|less|scss|sass)$": "identity-obj-proxy"
  },
  transform: {
    "^.+\\.(js|jsx)$": "babel-jest"
  }
};