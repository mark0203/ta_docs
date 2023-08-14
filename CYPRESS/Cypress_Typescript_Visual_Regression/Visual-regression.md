# Visual Regression

## Links

* [Functional vs visual testing](https://docs.cypress.io/guides/tooling/visual-testing#Functional-vs-visual-testing)
    * [Visual testing # Open source](https://docs.cypress.io/guides/tooling/visual-testing#Open-source)
        * [Visual testing plugins](https://docs.cypress.io/plugins#visual-testing)

### Best option:

* https://github.com/Andremoniy/cypress-visual-regression-resemble-js
    * Issue: https://github.com/Andremoniy/cypress-visual-regression-resemble-js/issues/18

### Second best option:

* https://github.com/FRSOURCE/cypress-plugin-visual-regression-diff
    * Install: `pnpm add -D @frsource/cypress-plugin-visual-regression-diff`
    * In `cypress/support/commands.ts` add `import "@frsource/cypress-plugin-visual-regression-diff";`
    * In `cypress.config.ts`
  ```Typescript
  import { initPlugin } from "@frsource/cypress-plugin-visual-regression-diff/plugins";
  ...
  ...
    env: { //plugin settings so you don't need to set this at test level
      pluginVisualRegressionUpdateImages: true, 
      pluginVisualRegressionDiffConfig: { threshold: 0.01 },
    },
    e2e: {
      baseUrl: 'https://example.cypress.io',

      setupNodeEvents(on, config) {
        initPlugin(on, config);
      },
    },
    component: {
      setupNodeEvents(on, config) {
        initPlugin(on, config);
      },
    },
  ```
    * [Usage examples](https://github.com/FRSOURCE/cypress-plugin-visual-regression-diff#configuration)
        * `cy.matchImage()`
        * `cy.get('.element_of_choice').matchImage()`
        * `cy.matchImage(matchAgainstPath: '/path/to/reference-image.png')`
