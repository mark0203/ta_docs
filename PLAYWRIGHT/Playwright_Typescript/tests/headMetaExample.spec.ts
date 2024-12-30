import { test, expect } from '@playwright/test';

test('meta[name="description"]', async ({ page }) => {
    await page.goto('https://playwright.dev/');

    // Check for Meta Name Description
    const metaNameDescription = await page.$('head > meta[name="description"]');
    const content = await metaNameDescription.getAttribute('content');
    expect(content).toBe('Cross-browser end-to-end testing for modern web apps');
});

test('meta[property="og:description"]', async ({ page }) => {
    await page.goto('https://playwright.dev/');
    const metaPropertyOgDescription = await page.$('head > meta[property="og:description"]');
    const content = await metaPropertyOgDescription.getAttribute('content');
    expect(content).toBe('Cross-browser end-to-end testing for modern web apps');
});

test('meta[name="viewport"]', async ({ page }) => {
    await page.goto('https://playwright.dev/');
    const metaViewport = await page.$('head > meta[name="viewport"]');
    const content = await metaViewport.getAttribute('content');
    expect(content).toBe('width=device-width, initial-scale=1.0');
});



