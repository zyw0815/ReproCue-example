import { test, expect } from '@playwright/test';

test('test', async ({ page }, testInfo) => {
  await page.goto("/recording.html");
  await page.getByRole('button', { name: 'Show supported formats' }).click();

  await test.step('ReproCue acceptance', async () => {
    try {
      await expect(page.getByText("PNG and JPEG images are supported.", { exact: true })).toBeVisible();
    } finally {
      try {
        await testInfo.attach('reprocue-checkpoint', {
          body: await page.screenshot({ timeout: 2_000 }),
          contentType: 'image/png',
        });
      } catch {
        // Evidence capture is optional. Keep the assertion result.
      }
    }
  });
});
