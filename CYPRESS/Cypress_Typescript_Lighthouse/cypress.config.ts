import { defineConfig } from 'cypress';
import { PluginEvents } from 'cypress';
import { lighthouse, prepareAudit } from "@cypress-audit/lighthouse";
import fs from "fs";

const currentDate = new Date();

const year = currentDate.getFullYear();
const month = String(currentDate.getMonth() + 1).padStart(2, '0'); // Add leading zero if needed
const day = String(currentDate.getDate()).padStart(2, '0'); // Add leading zero if needed
const hour = String(currentDate.getHours()).padStart(2, '0'); // Add leading zero if needed
const minute = String(currentDate.getMinutes()).padStart(2, '0'); // Add leading zero if needed
const second = String(currentDate.getSeconds()).padStart(2, '0'); // Add leading zero if needed

const formattedTimestamp = `${year}-${month}-${day}_${hour}_${minute}_${second}`;

export default defineConfig({
  video: false,

  e2e: {
    setupNodeEvents(on: PluginEvents, config: any) {
      on("before:browser:launch", (browser = {}, launchOptions) => {
        prepareAudit(launchOptions);
      });

      on("task", {
        lighthouse: lighthouse((lighthouseReport) => {
          console.log("---- Writing lighthouse report to disk ----");

          fs.writeFile(`lighthouse_${formattedTimestamp}.html`, lighthouseReport.report, (error: NodeJS.ErrnoException | null) => {
            error ? console.log(error) : console.log("Report created successfully");
          });
        }),
      });
    },

    baseUrl: 'https://example.cypress.io',
  },
});