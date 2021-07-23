import { PRODUCTS } from "../test-data/products";
const SEARCH_BOX = "#twotabsearchtextbox";

export function serachTerm() {
    $(SEARCH_BOX).waitForExist()
    $(SEARCH_BOX).addValue(PRODUCTS.SEARCH_TERM1.term);
    $(SEARCH_BOX).keys("Enter");
  }