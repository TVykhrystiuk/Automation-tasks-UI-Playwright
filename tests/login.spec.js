import {test,expect} from "@playwright/test";
import { LoginPage } from "../page-objects/LoginPage";

test('User logged in successfully', async({page}) => {
    const loginPage = new LoginPage(page);
    await loginPage.visit();
     
    await loginPage.fillCredentials();
    
    await loginPage.clickLoginButton();
    
    const successMessage = page.locator('.flash.success');
    await expect(successMessage).toContainText('You logged into a secure area!');
  })