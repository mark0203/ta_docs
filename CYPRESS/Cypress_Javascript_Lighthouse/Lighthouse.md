# Lighthouse

* [Cypress Lighthouse - installation guide](https://mfrachet.github.io/cypress-audit/guides/lighthouse/installation.html)
* `pnpm install --save-dev @cypress-audit/lighthouse`
* in `cypress.config.js` add

```Javascript
const { lighthouse, prepareAudit } = require("@cypress-audit/lighthouse");
...
...
...
setupNodeEvents(on, config) {
      on("before:browser:launch", (browser = {}, launchOptions) => {
        prepareAudit(launchOptions);
      });

      on("task", {
        lighthouse: lighthouse(),
      });
```

* In `cypress/support/commands.js` add `import "@cypress-audit/lighthouse/commands";`
* Add a test,
  see [this example](https://github.com/mfrachet/cypress-audit/blob/master/examples/external-url/cypress/e2e/main.cy.js)
* Play with the [available metrics](https://mfrachet.github.io/cypress-audit/guides/lighthouse/api-intro.html)
* Add [additional logging](https://glebbahmutov.com/blog/cypress-lighthouse/)