# Playwright

# Documentation

* [https://playwright.dev/](https://playwright.dev/)
* [Intro](https://playwright.dev/docs/intro)
* [Best Practices](https://playwright.dev/docs/best-practices)
* [Generate tests with the VS Code Extension](https://www.youtube.com/watch?v=5XIZPqKkdBA)
* [Run tests with the VS Code Extension](https://www.youtube.com/watch?v=mQmcIBMsc38)

## Javascript
### Installation
* `pnpm create playwright`
* Language? >> `Javascript`
* Where to put your end-to-end tests? >> `tests`
* Add a Github Actions workflow? (y/N) >> `false`
* Install Playwright browsers (can be done manually via 'pnpm exec playwright install')? (Y/n) >> `true`

## Typescript
### Installation
* `pnpm create playwright`
* Language? >> `Typescript`
* Where to put your end-to-end tests? >> `tests`
* Add a Github Actions workflow? (y/N) >> `false`
* Install Playwright browsers (can be done manually via 'pnpm exec playwright install')? (Y/n) >> `true`

## Python
### Installation
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

## Visual Regression Testing
Visual comparisons can be a powerful tool to have. But there 
### Documentation
[Playwright - Visual comparisons](https://playwright.dev/docs/test-snapshots)
<br>[Default screenshot folder](https://sdethub.com/eugene-truuts/how-the-screenshots-naming-works-in-playwright/)

Function: `.toHaveScreenshot()`
### Examples
[Typescript test](Playwright_Typescript/tests/toHaveScreenshotExample.spec.ts)

Don't confuse with `.toMatchSnapshot()` which ins only to compare text or arbitrary binary data.
And there is also the `.screenshot()` function which can be used to capture screenshots during your tests.
Although I've so far only used `.toHaveScreenshot()` since that served the intended purpose.

### Run via docker (Windows)
If you want to run a visual regression via a CI/CD pipeline (like gitlab), you can't use the images that have been rendered on your local (Windows) machine.

Each OS + Browser combination renderes different. In my setup I run via docker/gitlab so to create images that work in the pipeline, I need to created the images via docker as well.
- Install WSL (might need a reboot of your machine)
- Install Docker
- Look at [Dockerfile](Playwright_Typescript/Dockerfile)
- Look at [docker-compose.yaml](Playwright_Typescript/docker-compose.yaml)
- Look at [The test with tag @docker](Playwright_Typescript/tests/toHaveScreenshotExample.spec.ts)
- Run `docker-compose up --build visualtests` 

## Axe

### Install

Even though not mentioned in the official docs page `https://playwright.dev/docs/accessibility-testing`
You do need to install axe-core before you can use it.

#### npm

`npm install @axe-core/playwright`


#### pnpm

`pnpm install @axe-core/playwright`