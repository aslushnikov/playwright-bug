import { test, expect } from "@playwright/test";

test("user is able to login", async ({ page }) => {
  await page.route("**/login", async (route, request) => {
    const body = JSON.parse(request.postData() || "{}"); // Always empty in Chromium. Works with all other browsers.
    await Promise.all([
      expect(body.email).toEqual("test@test.com"),
      expect(body.password).toEqual("test"),
    ]);
    await route.fulfill();
  });

  await page.goto("/");
  const loginButton = page.getByTestId("login-button");
  await expect(loginButton).toBeEnabled();
  await Promise.all([loginButton.click(), page.waitForResponse("**/login")]);
});
