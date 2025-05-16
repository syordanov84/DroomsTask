const { defineConfig } = require('cypress');
const createBundler = require('@bahmutov/cypress-esbuild-preprocessor');
const { createEsbuildPlugin } = require('@badeball/cypress-cucumber-preprocessor/esbuild'); // Correct import
const addCucumberPreprocessorPlugin = require('@badeball/cypress-cucumber-preprocessor').addCucumberPreprocessorPlugin;

module.exports = defineConfig({

  e2e: {
    async setupNodeEvents(on, config) {
      await addCucumberPreprocessorPlugin(on, config);
      on("file:preprocessor", createBundler({
        plugins: [createEsbuildPlugin(config)],
      }));
      return config;
    },
    specPattern: "**/*.{feature,cy.js}",
    // stepDefinitions: "cypress/e2e/step_definitions"
    stepDefinitions: "cypress/e2e/POM Cypress/DrromsTask/API"
    },
    reporter: 'mochawesome',
    reporterOptions: {
    reportDir: 'cypress/reports',
    overwrite: false, // Do not overwrite existing reports
    html: true,
    json: true,
  },
})
