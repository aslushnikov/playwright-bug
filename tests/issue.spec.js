import { test, expect } from "@playwright/test";

test("user is able to login", async ({ page }) => {
  await page.goto("/");

  await page.route("**/login", async (route, request) => {
    await expect (request.postData()).toBeTruthy();
    await route.fulfill({json: '{}'});
  });

  const loginButton = page.getByTestId("login-button");
  await Promise.all([loginButton.click(), page.waitForResponse("**/login")]);
});
