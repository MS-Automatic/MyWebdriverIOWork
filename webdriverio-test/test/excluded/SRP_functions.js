const ADD_TO_CART_BUTTON = "#CC-productListing .btn-add-to-cart";

export function addToCartButton2() {
  browser.pause(10000);
  $$(ADD_TO_CART_BUTTON)[1].click();
}
