import {test,expect} from "@playwright/test";
import { LoginPage } from "../page-objects/LoginPage";

test.describe('Login Page Tests', () => {
    let loginPage;

    test.beforeEach(async ({page}) => {
        loginPage = new LoginPage(page);
        await loginPage.visit();
    });

    test('User logged in successfully', async() => {    
        const userInfo = {
            username: "tomsmith",
            password: "SuperSecretPassword!"
        }
        await loginPage.fillCredentials(userInfo.username, userInfo.password);
        await loginPage.clickLoginButton();
        
        const successMessage = await loginPage.getSuccessMessage();
        await expect(successMessage).toContainText('You logged into a secure area!');
    });


    test('Login fails with incorrect username', async() =>{
        const userInfo = {
            username: "name",
            password: "SuperSecretPassword!"
        } 
        await loginPage.fillCredentials(userInfo.username, userInfo.password);
        await loginPage.clickLoginButton();
        
        const invalidMessage = await loginPage.getInvalidMessage();
        await expect(invalidMessage).toContainText('Your username is invalid!')
    });


    test('Login fails with incorrect password', async() =>{
        const userInfo = {
            username: "tomsmith",
            password: "password"
        } 
        await loginPage.fillCredentials(userInfo.username, userInfo.password);
        await loginPage.clickLoginButton();
        
        const invalidMessage = await loginPage.getInvalidMessage();
        await expect(invalidMessage).toContainText('Your password is invalid!')
    });


    test('Login fails when username is missing', async() =>{
        const userInfo = {
            username: "",
            password: "SuperSecretPassword!"
        } 
        await loginPage.fillCredentials(userInfo.username, userInfo.password);
        await loginPage.clickLoginButton();
        
        const invalidMessage = await loginPage.getInvalidMessage();
        await expect(invalidMessage).toContainText('Your username is invalid!')
    });


    test('Login fails when password is missing', async() =>{
        const userInfo = {
            username: "tomsmith",
            password: ""
        } 
        await loginPage.fillCredentials(userInfo.username, userInfo.password);
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
        const userInfo = {
            username: "tomsmith",
            password: "SuperSecretPassword!"
        }
        await loginPage.fillCredentials(userInfo.username, userInfo.password);
        await loginPage.clickLoginButton();
        
        const successMessage = await loginPage.getSuccessMessage();
        await expect(successMessage).toContainText('You logged into a secure area!');

        await loginPage.clickLogoutButton()
        await expect(successMessage).toContainText('You logged out of the secure area!');
    });
});

