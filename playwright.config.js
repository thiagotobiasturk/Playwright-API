const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './features/tests',
  reporter: [['list']],
  use: {
    baseURL: 'https://jsonplaceholder.typicode.com',
    headless: true
  },
});
