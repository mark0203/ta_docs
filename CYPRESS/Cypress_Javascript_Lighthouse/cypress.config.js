const { lighthouse, prepareAudit } = require("@cypress-audit/lighthouse");
const fs = require("fs");

module.exports = {
  video: false,
  e2e: {
    baseUrl: "https://example.cypress.io",
    setupNodeEvents(on, config) {
      on("before:browser:launch", (browser = {}, launchOptions) => {
          prepareAudit(launchOptions);
        });

      on("task", {
        lighthouse: lighthouse((lighthouseReport) => {
          console.log("---- Writing lighthouse report to disk ----");

          fs.writeFile("lighthouse.html", lighthouseReport.report, (error) => {
            error ? console.log(error) : console.log("Report created successfully");
          });
        }),
      });
    },
  },
};
