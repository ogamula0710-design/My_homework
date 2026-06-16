const { defineConfig } = require("cypress");

module.exports = defineConfig({
  allowCypressEnv: true,

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'https://api.clickup.com/api/v2',
    env: {
      token: 'pk_302460406_Q3HO2DMGGQOXXHSADJXFQAC1YK2D9O8E'
    }
  },
});
