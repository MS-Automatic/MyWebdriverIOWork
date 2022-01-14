import { openURLAmazon,switchTab } from "../pages/Applications_functions";
import { enterEmail,clickContinue,enterPass,clickSubmit } from "../pages/Amazon_Login_functions";
import { serachTerm } from "../pages/Amazon_Header_functions";
import { clickProduct } from "../pages/Amazon_Search_functions";
import { addToCart } from "../pages/Amazon_PDP_functions";

describe("AmazonE2E", () => {
    it("AmazonLogin", () => {     
      openURLAmazon();
      browser.pause(5000);      
      enterEmail();
      clickContinue();
      enterPass();
      clickSubmit();
    });

    it("AmazonAddtoCart", () => {
        serachTerm();
        clickProduct();
        switchTab();
        addToCart();        
      });

  });