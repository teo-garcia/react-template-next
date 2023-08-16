import { test, expect } from '@playwright/test'

test.describe('Homepage tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:3000/')
  })

  test('Homepage should contain title', async ({ page }) => {
    await expect(page).toHaveTitle('Home | Next 13')
  })

  test('Homepage should contain heading', async ({ page }) => {
    // eslint-disable-next-line testing-library/prefer-screen-queries
    const title = page.getByRole('heading', { name: 'React Template Next' })
    await expect(title).toBeVisible()
  })

  // TODO: Add ThemeSwitch tests
  // TODO: Improve test matcher config and ESLint plugins
})
