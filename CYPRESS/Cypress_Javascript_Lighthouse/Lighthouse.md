# Lighthouse

* [Cypress Lighthouse - installation guide](https://mfrachet.github.io/cypress-audit/guides/lighthouse/installation.html)
* `pnpm install --save-dev @cypress-audit/lighthouse`
* in `cypress.config.js` add the following just to get the command `cy.lighthouse()` to work in your tests

```Javascript
const { lighthouse, prepareAudit } = require("@cypress-audit/lighthouse");
...
...
setupNodeEvents(on, config) {
  on("before:browser:launch", (browser = {}, launchOptions) => {
    prepareAudit(launchOptions);
  });

  on("task", {
    lighthouse()
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

In case you want to do something with reports, in `cypress.config.js` change the `on("task", {` into

```Javascript
on("task", {
  lighthouse: lighthouse((lighthouseReport) => {
    console.log(lighthouseReport); // raw lighthouse reports
  }),
});
```

### HTML reports

Or if you want HTML reports,

* Add the `const fs = require("fs");` import
* Add module export

```Javascript
module.exports.lighthouse = function(callback) {
  return cy.task('lighthouse').then(lighthouseReport => {
    callback(lighthouseReport);
  });
};
```

* Change the `on("task", {` into

```Javascript
on("task", {
  lighthouse: lighthouse((lighthouseReport) => {
    console.log("---- Writing lighthouse report to disk ----");

    fs.writeFile("lighthouse.html", lighthouseReport.report, { encoding: "utf8" }, (error) => {
      error ? console.log(error) : console.log("Report created successfully");
    });
  }),
});
```

Change your test a bit like this

```Javascript
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

* In `cypress/support/commands.js` add `import "@cypress-audit/lighthouse/commands";`
* Add a test,
  see [this example](https://github.com/mfrachet/cypress-audit/blob/master/examples/external-url/cypress/e2e/main.cy.js)
* Play with the [available metrics](https://mfrachet.github.io/cypress-audit/guides/lighthouse/api-intro.html)
* Make use of [global settings](https://mfrachet.github.io/cypress-audit/guides/lighthouse/global-api.html)
