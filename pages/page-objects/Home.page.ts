/**
 * Fixture + Page Object implementation
 * https://playwright.dev/docs/test-fixtures#creating-a-fixture
 */

import { Locator, Page } from "@playwright/test";

export class HomePage {
  readonly page: Page;
  readonly homePageHeader: Locator;

  constructor(page: Page) {
    this.page  = page;
    this.homePageHeader = page.getByRole('heading', { name: 'Secure Area', exact: true });
  }

  getHeader() {
    return this.homePageHeader;
  }
}
