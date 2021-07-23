it("AZlogin", () => {
  browser.url(
    "https://www.amazon.in/ap/signin?openid.pape.max_auth_age=0&openid.return_to=https%3A%2F%2Fwww.amazon.in%2F%3Fref_%3Dnav_ya_signin&openid.identity=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.assoc_handle=inflex&openid.mode=checkid_setup&openid.claimed_id=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0&"
  );
  const enterEmail = $("#ap_email");
  enterEmail.waitForExist();
  enterEmail.addValue("shetyemayur5@gmail.com");

  const buttonContinue = $("#continue");
  buttonContinue.waitForExist();
  buttonContinue.click();

  browser.pause(5000);

  const enterPass = $("#ap_password");
  enterPass.waitForExist();
  enterPass.addValue("kadambari");

  //const buttonLogin = $({"data-testid" : "#royal_login_button"})
  //const buttonLogin = $({"name" : "#login"})
  const buttonSubmit = $("#signInSubmit");
  buttonSubmit.waitForExist();
  buttonSubmit.click();

  browser.pause(5000);

  const textWelcome = $("#nav-link-accountList-nav-line-1");
  textWelcome.waitForExist();
  expect(textWelcome).toHaveText("Hello, Mayur");
});

it("AZAddToCart", () => {
  const searchBox = $("#twotabsearchtextbox");
  searchBox.waitForExist();
  searchBox.addValue("mobile");
  searchBox.keys("Enter");
  browser.pause(1000);

  const product = $("*=Redmi 9A (Nature Green");
  product.waitForExist();
  product.scrollIntoView()
  product.click();
  browser.pause(1000);

  //const link = product.$('a')
  //link.waitForExist()

  browser.getWindowHandles();
  browser.switchToWindow(browser.getWindowHandles()[1]);
  browser.pause(1000);

  const buttonATC = $("#add-to-cart-button");
  buttonATC.waitForExist();
  buttonATC.click();
  browser.pause(5000);
});
