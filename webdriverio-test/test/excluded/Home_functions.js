import { USER_CONFIGURATION } from "../test-data/customers";
const CLOSE_MODAL = "//div[@class='modal-cont']//span[@class='icon-close-32 link-cursor']";
export function closeModal() {
  $(CLOSE_MODAL).waitForExist();
  $(CLOSE_MODAL).click(); 
}
export function typeEmailToLogin() {
  $(LOGIN_INPUT).waitForExist();
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
export function requiredMessagesValidation(){
//get some message
const message = 'message';
return(message);
}
