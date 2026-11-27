import { expect, test } from '@playwright/test';

const image = Buffer.from(
  'iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/x8AAwMCAO+/hmsAAAAASUVORK5CYII=',
  'base64',
);

test('a failed image upload can be retried', async ({ page }) => {
  await page.goto('/');
  await page.getByLabel('Choose an image').setInputFiles({
    name: 'sample.png',
    mimeType: 'image/png',
    buffer: image,
  });
  await page.getByRole('button', { name: 'Upload image' }).click();

  await test.step('ReproCue acceptance', async () => {
    const status = page.getByRole('status');
    const retry = page.getByRole('button', { name: 'Retry upload' });

    await expect(status).toHaveText('Upload failed. Try again.', { timeout: 2000 });
    await expect(retry).toBeVisible();
    await retry.click();
    await expect(status).toHaveText('Upload complete.');
  });
});
