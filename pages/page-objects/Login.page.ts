/**
 * Fixture + Page Object implementation
 * https://playwright.dev/docs/test-fixtures#creating-a-fixture
 */

import { Locator, Page } from "@playwright/test";

export class LoginPage {
  readonly page: Page;
  readonly loginPageHeader: Locator;
  readonly usernameField: Locator;
  readonly passwordField: Locator;
  readonly loginButton: Locator;
  

  constructor(page: Page) {
    this.page  = page;
    this.loginPageHeader = page.getByRole('heading', { name: 'Login Page' });
    this.usernameField = page.getByLabel('Username');
    this.passwordField = page.getByLabel('Password');
    this.loginButton = page.getByRole('button', { name: /Login$/ });
  }

  async navigate() {
    // Go to the baseURL from playwright.config.ts
    await this.page.goto('');
  }

  getHeader() {
    return this.loginPageHeader;
  }

  async login(username: string, password: string) {
    await this.usernameField.fill(username);
    await this.passwordField.fill(password);
    await this.loginButton.click();
  }
}
