const { defineConfig } = require("cypress");
const environments = {
  dev: 'http://10.10.100.5:9915/',
  qa: 'https://qa.example.com',
  prod: 'https://www.example.com',
}
const { allureCypress } = require('allure-cypress/reporter')

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      const fs = require('fs')
const path = require('path')

// Inside setupNodeEvents(on, config):
on('task', {
  saveDriver(driver) {
    const filePath = path.join(
      config.projectRoot,
      'cypress',
      'fixtures',
      'driver.json'
    )

    fs.writeFileSync(filePath, JSON.stringify(driver, null, 2))

    return null
  },
  saveBus(bus) {
    const filePath = path.join(
      config.projectRoot,
      'cypress',
      'fixtures',
      'bus.json'
    )

    fs.writeFileSync(filePath, JSON.stringify(bus, null, 2))

    return null
  }
})

      allureCypress(on, config, {
        resultsDir: 'allure-results',
      })
      const environment = config.env.environment || 'dev'

      config.baseUrl = environments[environment]

      return config
    },

    screenshotOnRunFailure: true,
    video: true,
  },


  
});
