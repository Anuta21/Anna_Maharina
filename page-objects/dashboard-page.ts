import { Builder } from "selenium-webdriver";
import { BasicPage } from "./basic-page";
const { By } = require("selenium-webdriver");

export class DashboardPage extends BasicPage {
  protected adminTitleButton: string;
  constructor(driver: typeof Builder) {
    super(driver);

    this.adminTitleButton = By.xpath(
      '//*[@id="app"]/div[1]/div[1]/aside/nav/div[2]/ul/li[1]/a/span'
    );
  }

  async getDashboardPage() {
    return this.getPage(
      "https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index"
    );
  }

  async clickAdminTitleButton() {
    await this.clickElement(this.adminTitleButton);
  }
}
