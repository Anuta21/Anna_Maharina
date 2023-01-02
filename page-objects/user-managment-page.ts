import { Builder } from "selenium-webdriver";
import { newUser } from "../helpers/constants";

const { BasicPage } = require("./basic-page");
const { By } = require("selenium-webdriver");

export class UserManagmentPage extends BasicPage {
  protected addButton: string;
  protected searchButton: string;
  protected bucketButton: string;
  protected acceptButton: string;

  protected inputUsernameField: string;
  protected inputSelectorEmployeeField: string;
  protected selectorEmloyeeButton: string;
  protected userRoleArrow: string;
  protected statusArrow: string;
  protected essSelectButton: string;
  protected enabledSelectButton: string;

  protected userComponent: string;
  protected userComponentInList: string;
  constructor(driver: typeof Builder) {
    super(driver);

    this.addButton = By.xpath(
      '//*[@id="app"]/div[1]/div[2]/div[2]/div/div[2]/div[1]/button'
    );

    this.inputUsernameField = By.xpath(
      '//*[@id="app"]/div[1]/div[2]/div[2]/div/div[1]/div[2]/form/div[1]/div/div[1]/div/div[2]/input'
    );
    this.inputSelectorEmployeeField = By.xpath(
      '//*[@id="app"]/div[1]/div[2]/div[2]/div/div[1]/div[2]/form/div[1]/div/div[3]/div/div[2]/div/div/input'
    );
    this.selectorEmloyeeButton = By.xpath(
      `//div[@role="option" and .//span[text()="${newUser.employee}"]]`
    );
    this.userRoleArrow = By.xpath(
      '//*[@id="app"]/div[1]/div[2]/div[2]/div/div[1]/div[2]/form/div[1]/div/div[2]/div/div[2]/div/div/div[2]/i'
    );
    this.statusArrow = By.xpath(
      '//*[@id="app"]/div[1]/div[2]/div[2]/div/div[1]/div[2]/form/div[1]/div/div[4]/div/div[2]/div/div/div[2]/i'
    );
    this.essSelectButton = By.xpath(
      `//div[@role="option" and .//span[text()="${newUser.role}"]]`
    );
    this.enabledSelectButton = By.xpath(
      `//div[@role="option" and .//span[text()="${newUser.status}"]]`
    );

    this.searchButton = By.xpath(
      '//*[@id="app"]/div[1]/div[2]/div[2]/div/div[1]/div[2]/form/div[2]/button[2]'
    );
    this.bucketButton = By.xpath(
      "/html/body/div/div[1]/div[2]/div[2]/div/div[2]/div[3]/div/div[2]/div/div/div[6]/div/button[1]/i"
    );
    this.acceptButton = By.xpath(
      "/html/body/div/div[3]/div/div/div/div[3]/button[2]"
    );

    this.userComponent = By.xpath(
      "/html/body/div/div[1]/div[2]/div[2]/div/div[2]/div[3]/div/div[2]/div/div"
    );

    this.userComponentInList = By.xpath(
      `//div[contains(@class, "oxd-table-card ") and .//div[text()="${newUser.username}"] and .//div[text()="${newUser.role}""]]`
    );
  }

  async clickAddButton() {
    await this.clickElement(this.addButton);
  }

  async fillFindUserForm() {
    await this.sendData(this.inputUsernameField, newUser.username);
    await this.sendData(this.inputSelectorEmployeeField, newUser.employee);
    await this.clickElement(this.selectorEmloyeeButton);

    await this.clickElement(this.userRoleArrow);
    await this.clickElement(this.essSelectButton);

    await this.clickElement(this.statusArrow);
    await this.clickElement(this.enabledSelectButton);
  }

  async clickSearchButton() {
    await this.clickElement(this.searchButton);
  }

  async clickBucketButton() {
    await this.clickElement(this.bucketButton);
  }

  async clickAcceptButton() {
    await this.clickElement(this.acceptButton);
  }

  async findUserComponentTextData() {
    return await this.getText(this.userComponent);
  }

  async isUserComponentPresent() {
    try {
      await this.driver.getElement(this.userComponentInList);
      return true;
    } catch {
      return false;
    }
  }
}
