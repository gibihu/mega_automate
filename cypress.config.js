const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://mega-cargo-backoffice-web-production.up.railway.app",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
