
describe("CIService", () => {
    it("TestApplication", () => {     
      browser.url("file:///D:/JavaScript%20Practice/Practice3.html");
      browser.pause(5000); 
      
      $("#myButton").waitForExist();
      $("#myButton").click();

      const txtbox = $("#result");
      txtbox.waitForExist();
      
      expect(txtbox).toHaveValue("9");
    });

  });