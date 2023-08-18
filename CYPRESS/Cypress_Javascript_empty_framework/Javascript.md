# Typescript

Javascript is al fine, but what about using typescript? No problem, follow the steps below to install and configure
Typescript.
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
  "include": ["**/*.js"]
}
```

* Run cypress to make sure it all works as expected
    * `npm run cypress:open`
