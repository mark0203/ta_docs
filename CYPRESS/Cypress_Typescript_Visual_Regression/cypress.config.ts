import { defineConfig } from 'cypress';
import { initPlugin } from "@frsource/cypress-plugin-visual-regression-diff/plugins";

export default defineConfig({
  video: false,

  env: {
    //for more configurations: https://github.com/FRSOURCE/cypress-plugin-visual-regression-diff#configuration
    pluginVisualRegressionImagesPath: 'cypress/snapshots',
    pluginVisualRegressionDiffConfig: { threshold: 0.01 },
  },

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