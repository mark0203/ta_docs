import { defineConfig } from 'cypress';
import { lighthouse, prepareAudit } from "@cypress-audit/lighthouse";
import { PluginEvents } from 'cypress';

export default defineConfig({
  video: false,

  e2e: {
    setupNodeEvents(on: PluginEvents, config: any) {
      on("before:browser:launch", (browser = {}, launchOptions) => {
        prepareAudit(launchOptions);
      });

      on("task", {
        lighthouse: lighthouse(),
      });
    },

    baseUrl: 'https://example.cypress.io',
  },
});