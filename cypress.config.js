const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    viewportWidth: 1280,
    viewportHeight: 720,
    baseUrl: 'https://www.saucedemo.com',
    reporter: "mocha-junit-reporter",
    reporterOptions: {
      mochaFile: "results/junit/test-results.[hash].xml",
      toConsole: true
    },
    setupNodeEvents(on, config) {
    },
  },
});
