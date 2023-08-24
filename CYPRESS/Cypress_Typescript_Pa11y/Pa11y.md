# Pa11y

* [License](https://github.com/pa11y/pa11y/blob/master/LICENSE)

* [Cypress Lighthouse - installation guide](https://mfrachet.github.io/cypress-audit/guides/lighthouse/installation.html)
* `pnpm install --save-dev @cypress-audit/pa11y`

* [Current issue:](https://github.com/mfrachet/cypress-audit/issues/162)
* [self created bug](https://github.com/mfrachet/cypress-audit/issues/230)

* [options](https://github.com/pa11y/pa11y)

* in `cypress.config.ts` add

```Typescript
import { lighthouse, prepareAudit } from "@cypress-audit/lighthouse";
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

