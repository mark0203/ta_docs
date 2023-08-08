# Intro

Cypress is a test automation tool that make testing fairly easy. Here is what you need to start a project.

# Documentation

* https://www.cypress.io/

# Installation

* NodeJS [download](https://nodejs.org/en#download)
    * Make sure that Add to PATH is included otherwise you need to do this manually later
    * I also checked automatically install the necessary tools checkbox, but this is not required
        * Installation will take quiet a bit longer
* pnpm [installation](https://pnpm.io/installation)
    * Not mandatory but...
    * When using npm, if you have 100 projects using a dependency, you will have 100 copies of that dependency saved on disk. With pnpm, the dependency will be stored in a content-addressable store
* Cypress: Open a terminal - `pnpm install cypress --save-dev`

# Init and first run

* Open a terminal
* run `npm init`
    * Walk through the steps
* Follow: https://docs.cypress.io/guides/getting-started/opening-the-app
* Run `npx cypress open`
    * Windows Firewall Pop-up: `Allow Access`
* If everything went well you will see a Cypress Window asking `E2E Testing` / `Component Testing`
    * Select `E2E Testing`
        * This will create a bunch of files that you need for E2E testing
        * Read all about it if you want
        * Click `Continue`
    * Select a browser (you will only see locally installed browsers) and hit `Start E2E Testing in ....`
        * Create your first spec has two options `Scaffold example specs` & `Create new spec`
            * We choose `Create new spec`
                * Give it a name e.g. `my-first-spec`
                  Hit `Okay, run the spec` and see the magic
            * But to get familiar repeat this workshop in another empty propject and select the other option to see what will happen

# Usage & What's next

* Add `"cypress:open": "cypress open"` to `scripts` in `package.json`
    * You can now run cypress with this npm command `npm run cypress:open`
        * Which you can also add to your run configurations if you want
* [Writing your first end to end test](https://docs.cypress.io/guides/end-to-end-testing/writing-your-first-end-to-end-test)
* [Testing your app](https://docs.cypress.io/guides/end-to-end-testing/testing-your-app)
    * Add `baseUrl: 'https://example.cypress.io',` to `cypress.config.js`
    * Replace `cy.visit('.....');` with `cy.visit('\')` in your specfile and see what happens
    * Convert all .js files to .ts files
* Go over the best [practices page](https://docs.cypress.io/guides/references/best-practices)

# Typescript
Javascript is al fine, but what about using typescript? No problem, follow the steps below to install and configure Typescript.
Just remember to use `pnpm` instead of `npm` for every installation part in the documentation.
* [Cypress.io docs - Typescript](https://docs.cypress.io/guides/tooling/typescript-support)
* `pnpm install --save-dev typescript`
* Inside the `cypress` folder, add a file `tsconfig.json` with the following configuration
```javascript
{
  "compilerOptions": {
    "target": "es5",
    "lib": ["es5", "dom"],
    "types": ["cypress", "node"]
  },
  "include": ["**/*.ts"]
}
```
* Rename the e2e spec from `*.cy.js` to `*.cy.ts`
* Rename the support files to `*.ts` files
* Rename `cypress.config.js` to `cypress.config.ts`
* Run cypress to make sure it all works as expected
  * `npm run cypress:open`

# Examples
* [Cypress.io docs - Introduction](https://docs.cypress.io/guides/core-concepts/introduction-To-Cypress)
* [Cypress.io docs - Get](https://docs.cypress.io/api/commands/get)
* [Cypress.io docs - Writing and organizing tests](https://docs.cypress.io/guides/core-concepts/writing-and-organizing-tests)

## E2E testing

## Visual Regression Testing

### Links

* [Functional vs visual testing](https://docs.cypress.io/guides/tooling/visual-testing#Functional-vs-visual-testing)
    * [Visual testing # Open source](https://docs.cypress.io/guides/tooling/visual-testing#Open-source)
        * [Visual testing plugins](https://docs.cypress.io/plugins#visual-testing)

#### Best option:
* https://github.com/Andremoniy/cypress-visual-regression-resemble-js
    * Issue: https://github.com/Andremoniy/cypress-visual-regression-resemble-js/issues/18
#### Second best option:
* https://github.com/FRSOURCE/cypress-plugin-visual-regression-diff
    * Install: `pnpm add -D @frsource/cypress-plugin-visual-regression-diff`

### Examples

## HTML validation

* [HTML-Validate](https://html-validate.org/usage/cypress.html)
    * Install: `pnpm install --save-dev html-validate cypress-html-validate`
    * Configuration: Follow steps on this page:
        * https://www.npmjs.com/package/cypress-html-validate

## Component testing

* https://docs.cypress.io/guides/component-testing/overview 