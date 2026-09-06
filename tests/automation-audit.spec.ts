import { test, expect } from '@playwright/test';

test('Add email pattern and save it', async ({ page }) => {
  await page.goto('https://guardio.app.getnotch.dev/config/guardrails?version=NS-10MARCH-173207');

  await page
    .getByPlaceholder("Add an email pattern (e.g., '@shopify')")
    .fill('@shopify');

  await page.keyboard.press('Enter');

  await page.getByTestId('config-save-button').click();
  await page.reload();
  
  await expect(
    page.getByText('@shopify', { exact: true })
  ).toBeVisible();
});
