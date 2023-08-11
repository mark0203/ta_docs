import { defineConfig } from 'cypress';
import { tagify } from 'cypress-tags';
import { lighthouse, prepareAudit } from "@cypress-audit/lighthouse";
//import { pa11y } from "@cypress-audit/pa11y";
// import { PluginEvents } from 'cypress';
// import { BrowserLaunchOptions, Task } from 'cypress-audit/lighthouse';
// import { Logger } from 'cypress-audit/pa11y';

export default defineConfig({
  video: false,

  e2e: {
    setupNodeEvents(on, config) {
      config.env.CYPRESS_INCLUDE_TAGS = 'all';
      config.env.CYPRESS_EXCLUDE_TAGS = 'two,three';

      on('file:preprocessor', tagify(config));

      on("before:browser:launch", (browser = {}, launchOptions) => {
        prepareAudit(launchOptions);
      });

      on("task", {
        lighthouse: lighthouse(),
        //pa11y: pa11y(console.log.bind(console)),
      });
    },

    baseUrl: 'https://example.cypress.io',
  },
});
