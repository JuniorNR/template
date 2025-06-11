import { test, expect } from '@playwright/test';

import { Button } from '@/shared';

import { renderComponent } from './RenderComponent/RenderComponent';

test('Button snapshot', async ({ page }) => {
  // Рендер компонента в тестовой обёртке
  const componentHtml = renderComponent(<Button>Click me</Button>).innerHTML;

  // Загрузка HTML в Playwright
  await page.setContent(`
    <!DOCTYPE html>
    <html>
      <body>${componentHtml}</body>
    </html>
  `);

  // Сравнение со снепшотом
  await expect(page.locator('button')).toHaveScreenshot('button.png');
});
