const { defineConfig } = require("cypress");

module.exports = defineConfig({

  e2e: {
    setupNodeEvents(on, config) {
     require('cypress-mochawesome-reporter/plugin')(on);
      return config;
    },
    specPattern: 'cypress/e2e/**/*.cy.js',
    supportFile: 'cypress/support/e2e.js',
    reporter: 'cypress-mochawesome-reporter',
    reporterOptions: {
      reportDir: 'cypress/reports',
      overwrite: true,
      html: true,
      reportTitle: 'QA Report for I-doIt'
    },
    baseUrl: "http://demo.i-doit.com", 
    env: {
    username:"admin",
    password: "admin",
  },retries: {
    openMode: 0,
    runMode:1,
    }
  },
});
