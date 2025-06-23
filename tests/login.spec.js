import {test,expect} from "@playwright/test";
import { LoginPage } from "../page-objects/LoginPage";
import { userInfo } from "../test-data/loginData";

test.describe('Login Page Tests', () => {
    let loginPage;

    test.beforeEach(async ({page}) => {
        loginPage = new LoginPage(page);
        await loginPage.visit();
    });

    test('User logged in successfully', async() => {  
        const { username, password } = userInfo.valid  
        await loginPage.fillCredentials(username, password);
        await loginPage.clickLoginButton();
        
        const successMessage = await loginPage.getSuccessMessage();
        await expect(successMessage).toContainText('You logged into a secure area!');
    });


    test('Login fails with incorrect username', async() =>{
        const { username, password } = userInfo.invalidUsername 
        await loginPage.fillCredentials(username, password);
        await loginPage.clickLoginButton();
        
        const invalidMessage = await loginPage.getInvalidMessage();
        await expect(invalidMessage).toContainText('Your username is invalid!')
    });


    test('Login fails with incorrect password', async() =>{
        const { username, password } = userInfo.invalidPassword
        await loginPage.fillCredentials(username, password);
        await loginPage.clickLoginButton();
        
        const invalidMessage = await loginPage.getInvalidMessage();
        await expect(invalidMessage).toContainText('Your password is invalid!')
    });


    test('Login fails when username is missing', async() =>{
        const { username, password } = userInfo.missingUsername
        await loginPage.fillCredentials(username, password);
        await loginPage.clickLoginButton();
        
        const invalidMessage = await loginPage.getInvalidMessage();
        await expect(invalidMessage).toContainText('Your username is invalid!')
    });


    test('Login fails when password is missing', async() =>{
        const { username, password } = userInfo.missingPassword
        await loginPage.fillCredentials(username, password);
        await loginPage.clickLoginButton();
        
        const invalidMessage = await loginPage.getInvalidMessage();
        await expect(invalidMessage).toContainText('Your password is invalid!')
    })


    test('Empty credentials', async() =>{
        await loginPage.clickLoginButton();
        
        const invalidMessage = await loginPage.getInvalidMessage();
        await expect(invalidMessage).toContainText('Your username is invalid!')
    })


    test('Logout after successful login', async() => {  
        const { username, password } = userInfo.valid          
        await loginPage.fillCredentials(username, password);
        await loginPage.clickLoginButton();
        
        const successMessage = await loginPage.getSuccessMessage();
        await expect(successMessage).toContainText('You logged into a secure area!');

        await loginPage.clickLogoutButton()
        await expect(successMessage).toContainText('You logged out of the secure area!');
    });
});