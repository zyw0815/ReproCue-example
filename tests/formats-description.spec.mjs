import { expect, test } from '@playwright/test';

test('describes the supported formats control', async ({ page }, testInfo) => {
  await page.goto('/recording.html');

  await test.step('ReproCue acceptance', async () => {
    try {
      await expect(page.getByRole('button', { name: 'Show supported formats' }))
        .toHaveAccessibleDescription('Check which image types you can upload.', { timeout: 2_000 });
    } finally {
      await testInfo.attach('reprocue-checkpoint', {
        body: await page.screenshot(),
        contentType: 'image/png',
      });
    }
  });
});
