import { defineConfig } from 'cypress';
import { tagify } from 'cypress-tags';

export default defineConfig({
  video: false,

  e2e: {
    setupNodeEvents(on, config) {
      config.env.CYPRESS_INCLUDE_TAGS = 'all';
      config.env.CYPRESS_EXCLUDE_TAGS = 'two,three';

      on('file:preprocessor', tagify(config));
    },

    baseUrl: 'https://example.cypress.io',
  },
});