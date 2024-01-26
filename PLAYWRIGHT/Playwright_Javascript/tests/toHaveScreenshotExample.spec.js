const { test, expect } = require('@playwright/test');

test.beforeEach(async ({ page }, testInfo) => {
    await page.goto('https://playwright.dev/');
});

test('Page matches screenshot', async ({ page }) => {
    await expect(page).toHaveScreenshot('page.png');
});

test('Footer matches screenshot', async ({ page }) => {
    const locator = page.locator('footer');
    await locator.scrollIntoViewIfNeeded();
    await expect(locator).toBeVisible();
    await expect(locator).toHaveScreenshot('footer.png');
});