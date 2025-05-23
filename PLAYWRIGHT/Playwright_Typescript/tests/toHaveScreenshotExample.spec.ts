import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }, testInfo) => {
    await page.goto('https://playwright.dev/');
});

test('Page matches screenshot',{  tag: '@visual', }, async ({ page }) => {
    await expect(page).toHaveScreenshot();
});

test('Footer matches screenshot', {  tag: '@visual', }, async ({ page }) => {
    const locator = page.locator('footer');
    await locator.scrollIntoViewIfNeeded();
    await expect(locator).toBeVisible();
    await expect(locator).toHaveScreenshot('footer.png');
});