import { expect, extendedTest } from '../pages/fixtures/login.fixture';

const [ UN, PW ] = ["tomsmith", "SuperSecretPassword!"];

extendedTest('User can login', async ({ _loginPage, _homePage }) => {
  await _loginPage.navigate();
  await expect(_loginPage.getHeader()).toBeVisible();
  await _loginPage.login(UN, PW);
  await expect(_homePage.getHeader()).toBeVisible();
});
