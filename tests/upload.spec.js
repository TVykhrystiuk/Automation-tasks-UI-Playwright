import {test, expect} from "@playwright/test";
import path from 'path';
import { UploadPage } from "../page-objects/UploadPage.js";



test('User can upload a file successfully', async({page}) =>{
    const uploadPage = new UploadPage(page);
    await uploadPage.visit();

    const fileName = 'test-file.pdf'
    const filePath = path.resolve(__dirname, `../test-data/${fileName}`);
    
    await uploadPage.setFile(filePath);
    await uploadPage.clickUploadButton();

    const successMessage = await uploadPage.getSuccessMessage();
    await expect(successMessage).toContainText('File Uploaded!');
})


test('Uploaded file name appears after upload', async ({ page }) => {
    const uploadPage = new UploadPage(page);
    await uploadPage.visit();

    const fileName = 'test-file.pdf'
    const filePath = path.resolve(__dirname, `../test-data/${fileName}`);
    
    await uploadPage.setFile(filePath);
    await uploadPage.clickUploadButton();

    const fileNameElement = await uploadPage.getUploadedFileName();
    await expect(fileNameElement).toHaveText(fileName);
});

test('Fail to upload without selecting a file', async({page}) =>{
    const uploadPage = new UploadPage(page);
    await uploadPage.visit();

    await uploadPage.clickUploadButton();

    const successMessage = await uploadPage.getSuccessMessage();
    await expect(successMessage).not.toBeVisible();
})


