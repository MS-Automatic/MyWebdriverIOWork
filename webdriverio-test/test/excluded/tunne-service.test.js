import { openURLTunne } from "../pages/Applications_functions";
import { enterDetails } from "../pages/Tunne_functions";

describe("TunneService", () => {
    it("findservice", () => {     
      openURLTunne();
      browser.pause(5000);      
      enterDetails();
      browser.pause(5000);
    });

  });