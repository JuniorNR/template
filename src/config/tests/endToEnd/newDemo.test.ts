import { test, expect } from '@playwright/test';

test('Should render', async ({ page }) => {
  await page.goto('');

  await expect(page).toHaveURL('http://localhost:3000/');
});
