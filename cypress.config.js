const { defineConfig } = require('cypress')

module.exports = defineConfig({
  video: true,
  projectId: '2bfjxa',
  screenshotOnRunFailure: false,
  defaultCommandTimeout: 10000,
  reporter: 'cypress-multi-reporters',
  reporterOptions: {
    configFile: 'dicta-shared/reporter-config.json',
  },
  env: {
    DEV_URL: 'https://sharing-abbreviation.netlify.app/',
    LIVE_URL: 'https://abbreviation.dicta.org.il/',
    TOOL_TESTS: true,
    REQUESTS_TESTS: false,
    RECORD_KEY: '3c597451-cd7d-4ad6-a7df-9fac272ea4d6s',
  },
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
    baseUrl: 'https://sharing-abbreviation.netlify.app/',
    specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx}',
  },
})
