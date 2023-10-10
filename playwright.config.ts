import type { PlaywrightTestConfig } from '@playwright/test';


const config: PlaywrightTestConfig = {
  use: {
    actionTimeout: 60_000,
    baseURL: 'https://www.24mx.ie',
    trace: 'retain-on-failure',
    video: 'retain-on-failure',
    screenshot: 'only-on-failure',

  },
  projects: [{
    name: 'android-emulator'
  }],
  testDir: './src/tests/',
 
  timeout: 60_000,
  expect: {
    timeout: 60_000
  },
  retries: 0,
  reporter: [
    ['list'],
    ['html', { open: 'never' }],
  ]
};

export default config;
