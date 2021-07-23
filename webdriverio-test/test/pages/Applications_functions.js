import { ENV } from "../test-data/environments";
export function openURLPA() {
    browser.url(ENV.DEV.address);
}
export function openURLMoto() {
    browser.url(ENV.TEST1.address);
}

export function openURLAmazon(){
    browser.url(ENV.AMAZON.address);
}

export function expectToHaveURLCart(){
    expect(browser).toHaveUrl(ENV.TEST1.address +'cart');
}

export function switchTab(){
    browser.getWindowHandles();
    browser.switchToWindow(browser.getWindowHandles()[1]);
    browser.pause(1000);
}
