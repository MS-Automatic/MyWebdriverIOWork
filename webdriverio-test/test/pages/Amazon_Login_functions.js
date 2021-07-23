import { USER_CONFIGURATION } from "../test-data/customers";

const ENTER_EMAIL = "#ap_email"
const CONTINUE_BUTTON = "#continue"
const ENTER_PASS = "#ap_password"
const SUBMIT_BUTTON = "#signInSubmit"

export function enterEmail() {
    $(ENTER_EMAIL).waitForExist()
    $(ENTER_EMAIL).setValue(USER_CONFIGURATION.AMAZON_U1.username);
  }

  export function clickContinue() {
    $(CONTINUE_BUTTON).waitForExist()
    $(CONTINUE_BUTTON).click()
    browser.pause(5000);
  }

  export function enterPass() {
    $(ENTER_PASS).waitForExist()
    $(ENTER_PASS).setValue(USER_CONFIGURATION.AMAZON_U1.password);
  }

  export function clickSubmit() {
    $(SUBMIT_BUTTON).waitForExist()
    $(SUBMIT_BUTTON).click()
    browser.pause(5000);
  }