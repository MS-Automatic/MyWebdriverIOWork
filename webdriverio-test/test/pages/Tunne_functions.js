
const ENTER_Vehicle = "[name = 'vehicle']"
const AUDI_BRAND = `[alt="CHERY"]`
const AUDI_MODEL_A1 = `[alt="CHERY FACE"]`
const YEAR_SELECT = ".css-8b2fih-control"

const VERSION_SELECT = "div.GarageSelector_makeForm__3IKZl div:nth-child(2) div.form-group:nth-child(2) div.Select_select__1OKDl.css-2b097c-container:nth-child(2) > div.css-8b2fih-control"

export function enterDetails() {
    $(ENTER_Vehicle).waitForExist()
    $(ENTER_Vehicle).click()

    $(AUDI_BRAND).waitForExist()
    $(AUDI_BRAND).click()

    $(AUDI_MODEL_A1).waitForExist()
    $(AUDI_MODEL_A1).click()

    browser.pause(1000);

    $(YEAR_SELECT).waitForExist()
    $(YEAR_SELECT).click()

    browser.keys('Tab')

    browser.pause(1000);
    
     $(VERSION_SELECT).waitForExist()
     $(VERSION_SELECT).click()

   // browser.pause(1000);

    browser.keys('Tab')
  }

  