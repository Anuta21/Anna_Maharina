import { Builder } from "selenium-webdriver";
import { newUser } from "../helpers/constants";

const { BasicPage } = require("./basic-page");
const { By } = require("selenium-webdriver");

export class UserFormPage extends BasicPage {
  protected inputUsernameField: string;
  protected inputSelectorEmployeeField: string;
  protected selectorEmloyeeButton: string;
  protected inputPasswordField: string;
  protected inputConfirmedPasswordField: string;
  protected userRoleArrow: string;
  protected statusArrow: string;
  protected essSelectButton: string;
  protected enabledSelectButton: string;
  protected saveButton: string;

  constructor(driver: typeof Builder) {
    super(driver);

    this.inputUsernameField = By.xpath(
      '//*[@id="app"]/div[1]/div[2]/div[2]/div/div/form/div[1]/div/div[4]/div/div[2]/input'
    );
    this.inputSelectorEmployeeField = By.xpath(
      '//*[@id="app"]/div[1]/div[2]/div[2]/div/div/form/div[1]/div/div[2]/div/div[2]/div/div/input'
    );
    this.selectorEmloyeeButton = By.xpath(
      `//div[@role="option" and .//span[text()="${newUser.employee}"]]`
    );
    this.inputPasswordField = By.xpath(
      '//*[@id="app"]/div[1]/div[2]/div[2]/div/div/form/div[2]/div/div[1]/div/div[2]/input'
    );
    this.inputConfirmedPasswordField = By.xpath(
      '//*[@id="app"]/div[1]/div[2]/div[2]/div/div/form/div[2]/div/div[2]/div/div[2]/input'
    );
    this.userRoleArrow = By.xpath(
      '//*[@id="app"]/div[1]/div[2]/div[2]/div/div/form/div[1]/div/div[1]/div/div[2]/div/div/div[2]/i'
    );
    this.statusArrow = By.xpath(
      '//*[@id="app"]/div[1]/div[2]/div[2]/div/div/form/div[1]/div/div[3]/div/div[2]/div/div/div[2]/i'
    );
    this.essSelectButton = By.xpath(
      `//div[@role="option" and .//span[text()="${newUser.role}"]]`
    );
    this.enabledSelectButton = By.xpath(
      `//div[@role="option" and .//span[text()="${newUser.status}"]]`
    );
    this.saveButton = By.xpath(
      "/html/body/div/div[1]/div[2]/div[2]/div/div/form/div[3]/button[2]"
    );
  }

  async fillInUserForm() {
    await this.sendData(this.inputUsernameField, newUser.username);
    await this.sendData(this.inputSelectorEmployeeField, newUser.employee);
    await this.clickElement(this.selectorEmloyeeButton);

    await this.sendData(this.inputPasswordField, newUser.password);
    await this.sendData(this.inputConfirmedPasswordField, newUser.password);

    await this.clickElement(this.userRoleArrow);
    await this.clickElement(this.essSelectButton);

    await this.clickElement(this.statusArrow);
    await this.clickElement(this.enabledSelectButton);
  }

  async clickSaveButton() {
    await this.clickElement(this.saveButton);
  }
}
