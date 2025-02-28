const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    viewportWidth: 1280,
    viewportHeight: 720,
    baseUrl: 'https://www.saucedemo.com',
    setupNodeEvents(on, config) {
    },
  },
});
