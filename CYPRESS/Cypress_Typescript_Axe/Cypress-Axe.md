# Cypress-Axe

## Links

* [npmjs - cypress-axe](https://www.npmjs.com/package/cypress-axe)
* [GitHub - cypress-axe](https://github.com/component-driven/cypress-axe)
* [Freecodecamp - automating accessibility tests with cypress](https://www.freecodecamp.org/news/automating-accessibility-tests-with-cypress/)

## Setup

* Install cypress-axe `pnpm install --save-dev cypress-axe`
* Install peer dependencies `pnpm install --save-dev axe-core`
* In `cypress/support/e2e.ts` add `import 'cypress-axe'`
* In `tsconfig.json` add `"types": ["cypress", "cypress-axe"]`
* In `cypress.config.ts`, within `e2e` add

```typescript
setupNodeEvents(on, config) {
  on('task', {
    log(message) {
      console.log(message)

      return null
    },
    table(message) {
      console.table(message)

      return null
    }
  })
},
```

* In your test right after `cy.visit('/')` you do `cy.injectAxe()`
    * Either in the test or in the beforeEach
* See [test examples](cypress/e2e/cypress-axe.cy.ts)

## Configurations

* [deque.com/axe/core-documentation - axeconfigure](https://www.deque.com/axe/core-documentation/api-documentation/#api-name-axeconfigure)

