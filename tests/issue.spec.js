import { test, expect } from "@playwright/test";

test("user is able to login", async ({ page }) => {
  await page.goto("/");

  let postData;
  await page.route("**/login", async (route, request) => {
    postData = await request.postData();
    await route.fulfill({ json: "{}" });
  });

  const loginButton = page.getByTestId("login-button");
  await Promise.all([loginButton.click(), page.waitForResponse("**/login")]);
  await expect.poll(() => postData).toBeTruthy();
});
