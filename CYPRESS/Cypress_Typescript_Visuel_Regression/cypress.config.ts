import { defineConfig } from 'cypress';
import { initPlugin } from "@frsource/cypress-plugin-visual-regression-diff/plugins";

export default defineConfig({
  video: false,

  e2e: {
    baseUrl: 'https://example.cypress.io',

    setupNodeEvents(on, config) {
      initPlugin(on, config);
    },
  },
  component: {
    setupNodeEvents(on, config) {
      initPlugin(on, config);
    },
  },
});