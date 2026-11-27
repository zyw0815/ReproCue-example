import { expect, test } from '@playwright/test';

test.use({ viewport: { width: 680, height: 360 } });

test('marks a failed upload and clears the error after retry', async ({ page }, testInfo) => {
  await page.goto('/');
  await page.getByLabel('Choose an image').setInputFiles({
    name: 'sample.png',
    mimeType: 'image/png',
    buffer: Buffer.from(
      'iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/x8AAwMCAO+/hmsAAAAASUVORK5CYII=',
      'base64',
    ),
  });
  await page.getByRole('button', { name: 'Upload image' }).click();
  const status = page.getByRole('status');
  await expect(status).toHaveText('Upload failed. Try again.');

  await testInfo.attach('reprocue-checkpoint', {
    body: await page.getByRole('main').screenshot(),
    contentType: 'image/png',
  });

  await test.step('ReproCue acceptance', async () => {
    await expect(status).toHaveAttribute('data-state', 'error', { timeout: 2000 });
    await page.getByRole('button', { name: 'Retry upload' }).click();
    await expect(status).toHaveText('Upload complete.');
    await expect(status).not.toHaveAttribute('data-state', 'error');
  });
});
