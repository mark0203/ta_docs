# Playwright

# Documentation

* [https://playwright.dev/](https://playwright.dev/)
* [Intro](https://playwright.dev/docs/intro)

## Javascript

* `pnpm create playwright`
* Language? >> `Javascript`
* Where to put your end-to-end tests? >> `tests`
* Add a Github Actions workflow? (y/N) >> `false`
* Install Playwright browsers (can be done manually via 'pnpm exec playwright install')? (Y/n) >> `true`

## Typescript

* `pnpm create playwright`
* Language? >> `Typescript`
* Where to put your end-to-end tests? >> `tests`
* Add a Github Actions workflow? (y/N) >> `false`
* Install Playwright browsers (can be done manually via 'pnpm exec playwright install')? (Y/n) >> `true`

## Python

* Also see the documentation: https://playwright.dev/python/docs/intro
* `pip install pytest-playwright` (or add `--user` if you get an OSError without)
* `playwright install`

### Run tests

* For the pytest documentation: https://docs.pytest.org/en/7.4.x/
* `pytest`
* `pytest --headed`
* `pytest --browser firefox`
* `pytest test_example.py`
* `pytest --numprocesses 2`

## Axe

### Install

Even though not mentioned in the official docs page `https://playwright.dev/docs/accessibility-testing`
You do need to install axe-core before you can use it.

#### npm

```bash
npm install @axe-core/playwright
```

#### pnpm

```bash
pnpm install @axe-core/playwright
```