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
    * When using npm, if you have 100 projects using a dependency, you will have 100 copies of that dependency saved on
      disk. With pnpm, the dependency will be stored in a content-addressable store
* Cypress: Open a terminal - `pnpm install cypress --save-dev`

# Init and first run

* Open a terminal
* Run `npx cypress open`
    * Windows Firewall Pop-up: `Allow Access`
* If everything went well you will see a Cypress Window asking `E2E Testing` / `Component Testing`
    * Select `E2E Testing`
        * This will create a bunch of files that you need for E2E testing
        * Read all about it if you want
        * Click `Continue`
    * Select a browser (you will only see locally installed browsers) and hit `Start E2E Testing in ....`
        * Create your first spec has two options `Scaffold example specs` & `Create new spec`
            * If you choose `Scaffold example specs` you do get a bunch of examples to play with
            * We choose `Create new spec`
                * Give it a name e.g. `my-first-spec`
                * Hit `Okay, run the spec` and see the magic
            * But to get familiar repeat this workshop in another empty project and select the other option to see what
              will happen

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

* [Convert Javascript to Typescript manual](Cypress_Typescript_empty_framework/Typescript.md)

# Cypress Examples

* [Cypress.io docs - Configuration](https://docs.cypress.io/guides/references/configuration)
* [Cypress.io docs - Introduction](https://docs.cypress.io/guides/core-concepts/introduction-To-Cypress)
* [Cypress.io docs - Get](https://docs.cypress.io/api/commands/get)
* [Cypress.io docs - Writing and organizing tests](https://docs.cypress.io/guides/core-concepts/writing-and-organizing-tests)

# Component testing

* https://docs.cypress.io/guides/component-testing/overview

# Plugins

## Visual Regression Testing

* [Visual-regression manual](Cypress_Typescript_Visual_Regression/Visual-regression.md)

## Test Tags

* [Cypress-Tags manual](Cypress_Typescript_Tags/Tags.md)

## HTML validation

* [HTML-validation manual](Cypress_Typescript_HTML_validation/HTML-validation.md)

## Performance tests

### Lighthouse

* [Cypress-Audit Typescript manual](Cypress_Typescript_Lighthouse/Lighthouse.md)
* [Cypress-Audit Javascript manual](Cypress_Javascript_Lighthouse/Lighthouse.md)

## Accessibility testing (A11y)

### Cypress-Axe

* [Cypress-Axe manual](Cypress_Typescript_Axe/Cypress-Axe.md)

## Console Error Validation

* [Cypress fail on console error manual](Cypress_Typescript_Fail_On_Console_Error/Cypress_Fail_On_Console_Error.md)