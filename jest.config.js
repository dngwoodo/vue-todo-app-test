module.exports = {
  preset: "@vue/cli-plugin-unit-jest",
  testMatch: ["**/src/**/*.(test|spec).js"],
  setupFilesAfterEnv: ["./jest.setup.js"],
};
