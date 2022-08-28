class Home {
  readonly ICN_SHOPPING_CARD = '#shopping_cart_container';
  async validate() {
    await browser.$(this.ICN_SHOPPING_CARD).waitForDisplayed();
    return await browser.$(this.ICN_SHOPPING_CARD).isDisplayed();
  }
}
export default new Home();
