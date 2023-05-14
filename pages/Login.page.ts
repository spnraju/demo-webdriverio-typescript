class Login {
  readonly IPT_USERNAME = '#user-name';
  readonly IPT_PASSWORD = '#password';
  readonly BTN_LOGIN = '#login-button';
  readonly LOGO_SAUCE = '.login_logo';

  async open() {
    await browser.url('/');
    await browser.$(this.LOGO_SAUCE).waitForDisplayed();
  }
  async login(username, password) {
    await browser.$(this.IPT_USERNAME).setValue(username);
    await browser.$(this.IPT_PASSWORD).setValue(password);
    await browser.$(this.BTN_LOGIN).click();
  }
}
export default new Login();
