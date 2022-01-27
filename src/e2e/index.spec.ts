import { test, chromium } from '@playwright/test';

test('should navigate to the about page', async function () {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto('http://localhost:3000/');
  await page.screenshot({ path: `homepage.png` });
  await browser.close();
});
