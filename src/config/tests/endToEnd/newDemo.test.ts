import { test, expect } from '@playwright/test';

import { ENV_ENDTOEND } from './assets/constants';

test('Should render', async ({ page }) => {
  await page.goto(ENV_ENDTOEND.STORYBOOK_URL);

  await expect(page).toHaveURL(ENV_ENDTOEND.STORYBOOK_URL);
});
