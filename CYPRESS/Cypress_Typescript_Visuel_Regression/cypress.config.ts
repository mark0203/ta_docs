import { defineConfig } from 'cypress';
import { initPlugin } from "@frsource/cypress-plugin-visual-regression-diff/plugins";

export default defineConfig({
  video: false,

  env: { //plugin settings so you don't need to set this at test level
    pluginVisualRegressionUpdateImages: true,
    pluginVisualRegressionDiffConfig: { threshold: 0.01 },
  }

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