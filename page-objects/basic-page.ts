import { Builder } from "selenium-webdriver";
require("chromedriver");

export class BasicPage {
  driver;

  constructor(driver?: typeof Builder | undefined) {
    this.driver = driver || new Builder().forBrowser("chrome").build();
    this.driver.manage().window().maximize();
  }

  async getCurrentUrl() {
    return await this.driver.getCurrentUrl();
  }

  async getPage(link: string) {
    await this.driver.get(link);
  }

  async killChrome() {
    await this.driver.quit();
  }

  async sendData(element: string, data: string) {
    await this.driver.findElement(element).sendKeys(data);
  }

  async clickElement(element: string) {
    return await this.driver.findElement(element).click();
  }

  async getText(element: string) {
    return await this.driver.findElement(element).getText();
  }

  async getElement(element: string) {
    return await this.driver.findElement(element);
  }
}
