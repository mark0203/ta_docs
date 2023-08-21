import { defineConfig } from 'cypress';

export default defineConfig({
  video: false,

  e2e: {
    baseUrl: 'https://example.cypress.io',
    setupNodeEvents(on, config) {
      on('task', {
        log(message) {
          console.log(message)

          return null
        },
        table(message) {
          console.table(message)

          return null
        }
      })
    },
  },
});