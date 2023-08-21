const { lighthouse, prepareAudit } = require("@cypress-audit/lighthouse");
const fs = require("fs");

const currentDate = new Date();

const year = currentDate.getFullYear();
const month = String(currentDate.getMonth() + 1).padStart(2, '0'); // Add leading zero if needed
const day = String(currentDate.getDate()).padStart(2, '0'); // Add leading zero if needed
const hour = String(currentDate.getHours()).padStart(2, '0'); // Add leading zero if needed
const minute = String(currentDate.getMinutes()).padStart(2, '0'); // Add leading zero if needed
const second = String(currentDate.getSeconds()).padStart(2, '0'); // Add leading zero if needed

const formattedTimestamp = `${year}-${month}-${day}_${hour}h${minute}m${second}s`;

module.exports.lighthouse = function(callback) {
  return cy.task('lighthouse').then(lighthouseReport => {
    callback(lighthouseReport);
  });
};

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

          fs.writeFile(`lighthouse_${formattedTimestamp}.html`, lighthouseReport.report, { encoding: "utf8" }, (error) => {
            error ? console.log(error) : console.log("Report created successfully");
          });
        }),
      });
    },
  },
};
