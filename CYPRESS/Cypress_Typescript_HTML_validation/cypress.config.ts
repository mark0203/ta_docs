import { defineConfig } from 'cypress';
import htmlvalidate from "cypress-html-validate/plugin";

export default defineConfig({
  video: false,

  e2e: {
    setupNodeEvents(on) {
      htmlvalidate.install(on);
    },
    baseUrl: 'https://example.cypress.io',
  },
});