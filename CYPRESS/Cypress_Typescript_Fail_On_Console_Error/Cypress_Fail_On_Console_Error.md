# Cypress-fail-on-console-error

## Original posts

* [dev.to post](https://dev.to/tylerben/catching-console-error-statements-in-cypress-1b4g)
* [lostcreekdesigns.co - site](https://www.lostcreekdesigns.co/writing/failing-a-test-on-console.error-in-cypress/)
* [GitHub nils-hoyer](https://github.com/nils-hoyer/cypress-fail-on-console-error#readm)

## Method 1 - Update commands.ts

```typescript
Cypress.on("window:before:load", win => {
  cy.stub(win.console, "error").callsFake(msg => {
    // log out to the terminal
    cy.now("task", "error", msg)
    // log to Command Log and fail the test
    throw new Error(msg)
  })
})
```

## Method 2

* `pnpm install cypress-fail-on-console-error --save-dev`
* `cypress/support/commands.ts`

```typescript
import failOnConsoleError from "cypress-fail-on-console-error"

failOnConsoleError()
```
