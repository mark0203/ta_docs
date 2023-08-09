import { defineConfig } from 'cypress';
import { tagify } from 'cypress-tags';

export default defineConfig({
  plugins: [tagify()],
  e2e: {
    setupNodeEvents(on, config) {
      //on('file:preprocessor', tagify(config));
    },
    baseUrl: 'https://example.cypress.io',
  },
});
