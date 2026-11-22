import { expect, test } from '@playwright/test';

test.use({ viewport: { width: 680, height: 360 } });

test('visually confirms that retry did complete the upload', async ({ page }, testInfo) => {
  await page.goto(new URL('../index.html', import.meta.url).href);
  await page.getByLabel('Choose an image').setInputFiles({
    name: 'sample.png',
    mimeType: 'image/png',
    buffer: Buffer.from(
      'iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/x8AAwMCAO+/hmsAAAAASUVORK5CYII=',
      'base64',
    ),
  });
  await page.getByRole('button', { name: 'Upload image' }).click();
  await page.getByRole('button', { name: 'Retry upload' }).click();
  const status = page.getByRole('status');
  await expect(status).toHaveText('Upload complete.');

  await testInfo.attach('reprocue-checkpoint', {
    body: await page.getByRole('main').screenshot(),
    contentType: 'image/png',
  });

  await test.step('ReproCue acceptance', async () => {
    await expect(status).toHaveAttribute('data-state', 'success', { timeout: 2000 });
  });
});
