import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }
  getParagraphText() {
    return element(by.css('app-about h1')).getText();
  }
  getParagraphText() {
    return element(by.css('app-home h1')).getText();
  }
  getParagraphText() {
    return element(by.css('app-contact h1')).getText();
  }
}
