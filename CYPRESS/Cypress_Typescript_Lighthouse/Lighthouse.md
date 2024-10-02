# Lighthouse

* [Cypress Lighthouse - installation guide](https://mfrachet.github.io/cypress-audit/guides/lighthouse/installation.html)
* `pnpm install --save-dev @cypress-audit/lighthouse`
* in `cypress.config.ts` add

```Typescript
import { lighthouse, prepareAudit } from "@cypress-audit/lighthouse";

/* This declaration is missing in the @cypress-audit/lighthouse package */
declare module "@cypress-audit/lighthouse" {
    export function lighthouse(callback: (lighthouseReport: { report: string }) => void): Cypress.Task;
}
...
setupNodeEvents(on, config) {
  on("before:browser:launch", (browser = {}, launchOptions) => {
    prepareAudit(launchOptions);
  });

  on("task", {
    lighthouse: lighthouse(),
  });
});
```

<details>
  <summary>Want to know more about reports? Click here</summary>

## Reports

* [Original guide](https://mfrachet.github.io/cypress-audit/guides/lighthouse/reports.html)
* [Github cypress-audit issue 222](https://github.com/mfrachet/cypress-audit/issues/223)
* ["New" guide](https://github.com/mfrachet/cypress-audit/blob/master/packages/documentation/docs/guides/lighthouse/reports.md)

### Raw Reports

In case you want to do something with reports, in `cypress.config.ts` change the `on("task", {` into

```Typescript
on("task", {
  lighthouse: lighthouse((lighthouseReport) => {
    console.log(lighthouseReport); // raw lighthouse reports
  }),
});
```

### HTML reports

Or if you want HTML reports,

* Add the `import fs from "fs";` import
* Add declare module

```Typescript
declare module "@cypress-audit/lighthouse" {
  export function lighthouse(callback: (lighthouseReport: { report: string }) => void): Cypress.Task;
}
```

* Change the `on("task", {` into

```Typescript
on("task", {
  lighthouse: lighthouse((lighthouseReport) => {
    console.log("---- Writing lighthouse report to disk ----");

    fs.writeFile("lighthouse.html", lighthouseReport.report, { encoding: "utf8" }, (error: NodeJS.ErrnoException | null) => {
      error ? console.log(error) : console.log("Report created successfully");
    });
  }),
});
```

Change your test a bit like this

```Typescript
const thresholds = {
  /* ... your lighthouse thresholds */
};

const lighthouseOptions = {
  /* ... your lighthouse options */
};

const lighthouseConfig = {
  settings: { output: "html" },
  extends: "lighthouse:default",
  /* ... Alternatively, you could set your own lighthouse config */
};

cy.lighthouse(thresholds, lighthouseOptions, lighthouseConfig);
```

</details>

* In `cypress/support/commands.ts` add `import "@cypress-audit/lighthouse/commands";`
* Add a test,
  see [this example](https://github.com/mfrachet/cypress-audit/blob/master/examples/external-url/cypress/e2e/main.cy.js)
* Play with the [available metrics](https://mfrachet.github.io/cypress-audit/guides/lighthouse/api-intro.html)
* Make use of [global settings](https://mfrachet.github.io/cypress-audit/guides/lighthouse/global-api.html)
