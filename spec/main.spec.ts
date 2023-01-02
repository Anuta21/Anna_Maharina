import { LoginPage } from "../page-objects/login-page";
import { DashboardPage } from "../page-objects/dashboard-page";
import { UserManagmentPage } from "../page-objects/user-managment-page";
import { UserFormPage } from "../page-objects/save-user-page";

describe("OrangeHMR", () => {
  let LogingPg = new LoginPage();

  beforeAll(async () => {
    await LogingPg.getLoginPage();
    await LogingPg.setImplicitTimeouts();
  }, 30000);

  it("should log in", async () => {
    await LogingPg.login();
    expect(await LogingPg.getCurrentUrl()).toBe(
      "https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index"
    );
  }, 10000);

  it("should go to 'addUser' form and add user", async () => {
    const DashboardPg = new DashboardPage(LogingPg.getDriver());
    await DashboardPg.clickAdminTitleButton();

    const UserManagmentPg = new UserManagmentPage(LogingPg.getDriver());
    await UserManagmentPg.clickAddButton();
    expect(await UserManagmentPg.getCurrentUrl()).toBe(
      "https://opensource-demo.orangehrmlive.com/web/index.php/admin/saveSystemUser"
    );

    const UserFormPg = new UserFormPage(LogingPg.getDriver());
    await UserFormPg.fillInUserForm();
    await UserFormPg.clickSaveButton();
  }, 30000);

  it("should find added user in the grid", async () => {
    const UserManagmentPg = new UserManagmentPage(LogingPg.getDriver());
    await UserManagmentPg.fillFindUserForm();
    await UserManagmentPg.clickSearchButton();
    expect(await UserManagmentPg.findUserComponentTextData()).toContain(
      "Tom Adams"
    );
  }, 20000);

  it("user should be deleted successfully", async () => {
    const UserManagmentPg = new UserManagmentPage(LogingPg.getDriver());
    await UserManagmentPg.clickBucketButton();
    await UserManagmentPg.clickAcceptButton();
    expect((await UserManagmentPg.isUserComponentPresent()) == false);
  }, 20000);

  afterAll(async () => await LogingPg.killChrome());
});
