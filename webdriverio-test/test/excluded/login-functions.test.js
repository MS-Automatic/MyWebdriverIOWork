import { clickLoginLink,typeEmailToLogin,typePasswordToLogin, clickLoginButton,verifyIfUserIsLoggedIn,clickMyAccount } from "../pages/Header_functions";
import { openURLPA } from "../pages/Applications_functions";
describe("Login", () => {
  it("Login", () => {
    openURLPA();    
    clickLoginLink();   
    typeEmailToLogin();    
    typePasswordToLogin();
    clickLoginButton();
    clickMyAccount();
  });
});
