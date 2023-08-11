import { defineConfig } from 'cypress';
import { tagify } from 'cypress-tags';
import { lighthouse, prepareAudit } from "@cypress-audit/lighthouse";
import { PluginEvents } from 'cypress';

export default defineConfig({
  video: false,

  e2e: {
    setupNodeEvents(on: PluginEvents, config: any) {
      config.env.CYPRESS_INCLUDE_TAGS = 'all';
      config.env.CYPRESS_EXCLUDE_TAGS = 'two,three';

      on('file:preprocessor', tagify(config));

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
