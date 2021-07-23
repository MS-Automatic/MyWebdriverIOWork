const BUTTON_ATC = "#add-to-cart-button";

export function addToCart() {
    $(BUTTON_ATC).waitForExist()
    $(BUTTON_ATC).click();
    browser.pause(5000);
  }