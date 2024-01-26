import re
from playwright.sync_api import Page, expect

def test_page_matches_screenshot(page: Page):
    page.goto("https://playwright.dev/")
    page.screenshot(path="page.png")
    page.screenshot(path="fullPage.png", full_page=True)

def test_footer_matches_screenshot(page: Page):
    page.goto("https://playwright.dev/")
    footer = page.locator("footer")
    footer.scroll_into_view_if_needed()
    expect(footer).to_be_visible()
    footer.screenshot(path="footer.png")