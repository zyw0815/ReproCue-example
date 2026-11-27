import { expect, test } from '@playwright/test';

test('shows the hide action when supported formats are visible', async ({ page }, testInfo) => {
  await page.goto('/recording.html');
  const formatsToggle = page.getByRole('button', { name: 'Show supported formats' });
  await formatsToggle.click();

  await test.step('ReproCue acceptance', async () => {
    try {
      await expect(page.getByRole('button')).toHaveText('Hide supported formats', { timeout: 2_000 });
    } finally {
      await testInfo.attach('reprocue-checkpoint', {
        body: await page.screenshot(),
        contentType: 'image/png',
      });
    }
  });

  await page.getByRole('button', { name: 'Hide supported formats' }).click();
  await expect(formatsToggle).toHaveAttribute('aria-expanded', 'false');
});
