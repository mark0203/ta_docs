# Typescript

Javascript is al fine, but what about using typescript? No problem, follow the steps below to install and configure
Typescript.
Just remember to use `pnpm` instead of `npm` for every installation part in the documentation.

* [Cypress.io docs - Typescript](https://docs.cypress.io/guides/tooling/typescript-support)
* `pnpm install --save-dev typescript`
* Inside the `cypress` folder, add a file `tsconfig.json` with the following configuration

```typescript
{
  "compilerOptions": {
    "target": "es5",
    "lib": ["es5", "dom"],
    "types": ["cypress", "node"]
  },
  "include": ["**/*.ts"]
}
```
> **Note**
> You may have to restart your IDE's TypeScript server if the setup above 
> does not appear to work. For example:
> 
> VS Code (within a .ts or .js file):
> 
> Open the command palette (Mac: cmd+shift+p, Windows: ctrl+shift+p)
> Type "restart ts" and select the "TypeScript: Restart TS server." option
> If that does not work, try restarting the IDE.

* Rename the e2e spec from `*.cy.js` to `*.cy.ts`
* Rename the support files to `*.ts` files
* Rename `cypress.config.js` to `cypress.config.ts`
* Run cypress to make sure it all works as expected
    * `npm run cypress:open`
