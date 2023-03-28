import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
  // Look for test files in the "tests" directory, relative to this configuration file.
  testDir: "tests",

  // Reporter to use
  reporter: "html",
  timeout: 10000,

  use: {
    // Base URL to use in actions like `await page.goto('/')`.
    baseURL: "http://127.0.0.1:3000",
    testIdAttribute: "data-pw",
  },
  // Configure projects for major browsers.
  projects: [
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"] },
    },
    {
        name: "firefox",
        use: { ...devices["Desktop Firefox"] },
    }
  ],
  // Run your local dev server before starting the tests.
  webServer: {
    command: "npx serve",
    url: "http://127.0.0.1:3000",
    reuseExistingServer: true,
  },
});
