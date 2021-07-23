import { PRODUCTS } from "../test-data/products";

export function clickProduct() {
    let product = $(PRODUCTS.PRODUCT_TERM1.term);
        product.waitForExist();
        product.scrollIntoView()
        product.click();
        browser.pause(1000);
  }