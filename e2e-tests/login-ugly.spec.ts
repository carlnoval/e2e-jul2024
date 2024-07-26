import { expect, test } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/login');
  await expect(page.getByRole('heading', { name: 'Login Page' })).toBeVisible();
  await page.getByLabel('Username').fill('tomsmith');
  await page.getByLabel('Password').fill('SuperSecretPassword!');
  await page.getByRole('button', { name: /Login$/ }).click();
  await expect(page.getByRole('heading', { name: 'Secure Area', exact: true })).toBeVisible();
});
