import { defineConfig } from '@playwright/test';

const origin = 'http://127.0.0.1:4316';

export default defineConfig({
  testDir: './tests',
  use: { baseURL: origin },
  webServer: {
    command: 'node serve.mjs',
    url: origin,
    reuseExistingServer: !process.env.CI,
  },
});
