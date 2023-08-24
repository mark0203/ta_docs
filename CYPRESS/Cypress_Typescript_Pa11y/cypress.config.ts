import { defineConfig } from 'cypress';
import { pa11y, prepareAudit } from "@cypress-audit/pa11y";

export default defineConfig({
  video: false,

  e2e: {
    setupNodeEvents(on, config) {
      on("before:browser:launch", (_browser, launchOptions) => {
        prepareAudit(launchOptions);
      });

      on("task", {
        pa11y: pa11y(),
      });
    },

    baseUrl: 'https://example.cypress.io',
  },
});