import { test, expect } from '@playwright/test';

test('Page matches screenshot', async ({ page }) => {
    await page.goto('https://playwright.dev/');
    await expect(page).toHaveScreenshot('page.png');
});

test('Footer matches screenshot', async ({ page }) => {
    await page.goto('https://playwright.dev/');
    const locator = page.locator('footer');
    await locator.scrollIntoViewIfNeeded();
    await expect(locator).toBeVisible();
    await expect(locator).toHaveScreenshot('footer.png');
});