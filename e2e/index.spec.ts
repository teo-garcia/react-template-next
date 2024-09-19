import { test, expect } from '@playwright/test'

test.describe('Homepage tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:3000/')
  })

  test('Page should contain title', async ({ page }) => {
    await expect(page).toHaveTitle('Home | RTN')
  })

  test('Page should contain heading', async ({ page }) => {
    // eslint-disable-next-line
    const title = page.getByRole('heading', { name: 'React Template Next' })
    await expect(title).toBeVisible()
  })
})
