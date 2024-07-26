/**
 * Fixture + Page Object implementation
 * https://playwright.dev/docs/test-fixtures#creating-a-fixture
 */

import { test } from '@playwright/test';
import { HomePage } from "../page-objects/Home.page";
import { LoginPage } from "../page-objects/Login.page";

// Declare fixture types
type HomePageFixtures = {
  _loginPage: LoginPage;
  _homePage: HomePage;
};

export const extendedTest = test.extend<HomePageFixtures>({
  _loginPage: async ({ page }, use) => {
    // Use the fixture value in the test.
    await use(new LoginPage(page));
  },
  _homePage: async ({ page }, use) => {
    // Use the fixture value in the test.
    await use(new HomePage(page));
  }
});

export { expect } from '@playwright/test';
