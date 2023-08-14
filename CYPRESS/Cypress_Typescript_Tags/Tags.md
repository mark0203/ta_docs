# Tags

If you want to include/exclude specific features/tests from a run, it might be handy to add tags.

> ### !note:
>
> Tags only work on `e2e` tests, not on `component` tests, see: https://github.com/infosum/cypress-tags/issues/257

* https://github.com/infosum/cypress-tags
* [Cypress Tags - Readme](https://github.com/infosum/cypress-tags/blob/master/README.md)
* `pnpm install cypress-tags`
* Update `cypress.config.ts` to:

```typescript
import { defineConfig } from 'cypress';
import { tagify } from 'cypress-tags';

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      config.env.CYPRESS_INCLUDE_TAGS = 'all';
      config.env.CYPRESS_EXCLUDE_TAGS = 'two,three';

      on('file:preprocessor', tagify(config));
    },
    baseUrl: 'https://example.cypress.io',
  },
});
```

* Add `cypress-tags` to `tsconfig.json` types
* Update your test file with

```typescript
describe('all', 'template spec', () => {
  it('one', 'passes', () => {
```