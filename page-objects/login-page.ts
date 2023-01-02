import { mainUser } from "../helpers/constants";

const { BasicPage } = require("./basic-page");
const { By } = require("selenium-webdriver");

export class LoginPage extends BasicPage {
  protected inputUsernameField: string;
  protected inputPasswordField: string;
  protected loginButton: string;
  constructor() {
    super();

    this.inputUsernameField = By.xpath(
      '//*[@id="app"]/div[1]/div/div[1]/div/div[2]/div[2]/form/div[1]/div/div[2]/input'
    );
    this.inputPasswordField = By.xpath(
      '//*[@id="app"]/div[1]/div/div[1]/div/div[2]/div[2]/form/div[2]/div/div[2]/input'
    );
    this.loginButton = By.xpath(
      '//*[@id="app"]/div[1]/div/div[1]/div/div[2]/div[2]/form/div[3]/button'
    );
  }

  getDriver() {
    return this.driver;
  }

  async setImplicitTimeouts() {
    await this.driver.manage().setTimeouts({ implicit: 20000 });
  }

  async getLoginPage() {
    return this.getPage(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    );
  }

  async login() {
    await this.sendData(this.inputUsernameField, mainUser.username);
    await this.sendData(this.inputPasswordField, mainUser.password);
    await this.clickElement(this.loginButton);
  }
}
