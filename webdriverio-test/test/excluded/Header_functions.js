import { USER_CONFIGURATION } from "../test-data/customers";
import { PRODUCTS } from "../test-data/products";
const LOGIN_HEADER_LINK = "#CC-loginHeader-login";
const LOGIN_INPUT = "#CC-login-input";
const PASSWORD_INPUT = "#CC-login-password-input";
const BUTTON_LOGIN_SUBMIT = "#CC-userLoginSubmit";
const SEARCH_INPUT = "#CC-headerWidget-Search"
const CART_ICON = "#oe-header-cart-total";
const HEADER_LOGIN_GREETING = "#header > div.container > div > div.col-xs-7.col-sm-9.col-md-10.header-columns-container > div.cc-welcome-oe > div.oe-is-logged > div:nth-child(1) > span" ;

export function clickLoginLink() {  
    $(LOGIN_HEADER_LINK).waitForExist();
    $(LOGIN_HEADER_LINK).click(); 
}

export function typeEmailToLogin() {
  browser.pause(3000);
  $(LOGIN_INPUT).setValue(USER_CONFIGURATION.DEV_B2C_U1.username);
}

export function typePasswordToLogin() {
  $(PASSWORD_INPUT).waitForExist();
  $(PASSWORD_INPUT).setValue(USER_CONFIGURATION.DEV_B2C_U1.password);
}

export function clickLoginButton() {
  $(BUTTON_LOGIN_SUBMIT).waitForExist();
  $(BUTTON_LOGIN_SUBMIT).click();
}

export function clickMyAccount(){
    browser.pause(5000);
    $(HEADER_LOGIN_GREETING).click();
   
}

export function typeSearchInput() {
  $(SEARCH_INPUT).waitForExist();
  $(SEARCH_INPUT).setValue(PRODUCTS.PRODUCT1.productName);
}

export function clickEnterSearch(){
  $(SEARCH_INPUT).waitForExist();
  $(SEARCH_INPUT).keys("Enter")
}

export function clickCartIcon() {
  browser.pause(8000);
  $(CART_ICON).click(); 
}
