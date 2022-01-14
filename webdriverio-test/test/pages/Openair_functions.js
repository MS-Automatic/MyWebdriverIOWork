
const COMPANY_ID = "[name = 'account']"
const USERNAME = "[name = 'username']"
const PASSWORD = "[name = 'password']"

const BUTTON = "#login_submit_button"

const TIMESHEETS = "//a[contains(text(),'Open Timesheets')]"

const THIRD_SHEET = "//tbody/tr[3]/td[3]/div[2]/div[1]/div[1]/div[1]/a[1]"

const C5R1 = "#ts_c5_r1"
const C6R1 = "#ts_c6_r1"
const C7R1 = "#ts_c7_r1"
const C8R1 = "#ts_c8_r1"
const C9R1 = "#ts_c9_r1"

const C5R2 = "#ts_c5_r2"
const C6R2 = "#ts_c6_r2"
const C7R2 = "#ts_c7_r2"
const C8R2 = "#ts_c8_r2"
const C9R2 = "#ts_c9_r2"

const C5R3 = "#ts_c5_r3"
const C6R3 = "#ts_c6_r3"
const C7R3 = "#ts_c7_r3"
const C8R3 = "#ts_c8_r3"
const C9R3 = "#ts_c9_r3"

const C5R4 = "#ts_c5_r4"
const C6R4 = "#ts_c6_r4"
const C7R4 = "#ts_c7_r4"
const C8R4 = "#ts_c8_r4"
const C9R4 = "#ts_c9_r4"

const SAVEANDSUBMIT = "#save_grid_submit"

export function OALogin() {

    $(COMPANY_ID).waitForExist()
    $(COMPANY_ID).setValue("Object Edge")

    $(USERNAME).waitForExist()
    $(USERNAME).setValue("mayur.shetye")

    $(PASSWORD).waitForExist()
    $(PASSWORD).setValue("Objectedge@123")

    $(BUTTON).waitForExist()
    $(BUTTON).click()
}

export function enterDetails() {

    $(TIMESHEETS).waitForExist()
    $(TIMESHEETS).click()

    $(THIRD_SHEET).waitForExist()
    $(THIRD_SHEET).click()

    $(C5R1).waitForExist()
    $(C5R1).setValue("2")
    $(C6R1).waitForExist()
    $(C6R1).setValue("2")
    $(C7R1).waitForExist()
    $(C7R1).setValue("2")
    $(C8R1).waitForExist()
    $(C8R1).setValue("2")
    $(C9R1).waitForExist()
    $(C9R1).setValue("2")

    $(C5R2).waitForExist()
    $(C5R2).setValue("4")
    $(C6R2).waitForExist()
    $(C6R2).setValue("4")
    $(C7R2).waitForExist()
    $(C7R2).setValue("4")
    $(C8R2).waitForExist()
    $(C8R2).setValue("4")
    $(C9R2).waitForExist()
    $(C9R2).setValue("4")
    
    $(C5R3).waitForExist()
    $(C5R3).setValue("2")
    $(C6R3).waitForExist()
    $(C6R3).setValue("2")
    $(C7R3).waitForExist()
    $(C7R3).setValue("2")
    $(C8R3).waitForExist()
    $(C8R3).setValue("2")
    $(C9R3).waitForExist()
    $(C9R3).setValue("2")
    
    $(C5R4).waitForExist()
    $(C5R4).setValue("2")
    $(C6R4).waitForExist()
    $(C6R4).setValue("2")
    $(C7R4).waitForExist()
    $(C7R4).setValue("2")
    $(C8R4).waitForExist()
    $(C8R4).setValue("2")
    $(C9R4).waitForExist()
    $(C9R4).setValue("2")

    browser.pause(3000);

    $(SAVEANDSUBMIT).waitForExist()
    $(SAVEANDSUBMIT).click()

    //browser.keys('Tab')
  }

  