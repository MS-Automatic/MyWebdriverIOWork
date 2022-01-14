import { openURLOpenair } from "../pages/Applications_functions";
import { enterDetails } from "../pages/Openair_functions";
import { OALogin } from "../pages/Openair_functions";

describe("OAService", () => {
    it("fillTimesheet", () => {     
      openURLOpenair();
      browser.pause(5000); 
      OALogin();
      browser.pause(5000);            
      enterDetails();
      browser.pause(5000);
    });

  });