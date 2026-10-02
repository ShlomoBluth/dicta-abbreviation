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
  },
  e2e: {
    baseUrl: 'https://sharing-abbreviation.netlify.app/',
    specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}',
    setupNodeEvents(on) {
      require('./dicta-shared/videoCleanup')(on)
    },
  },
})
