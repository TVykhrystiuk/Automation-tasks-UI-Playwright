import {test, expect} from "@playwright/test";
import path from 'path';
import { UploadPage } from "../page-objects/UploadPage.js";

test('User can upload file successfuly', async({page}) =>{
    const uploadPage = new UploadPage(page);
    const supportedFiles = [
        'test-file.pdf', 
        'test-file.txt', 
        'test-file.doxs', 
        'test-file.xlsx', 
        'test-file.jpg', 
        'test-file.png', 
        'test-file.js'
    ]

    for(const fileName of supportedFiles){
        await uploadPage.visit();
        const filePath = path.resolve(__dirname, `../test-data/${fileName}`);
        
        await uploadPage.setFile(filePath);
        await uploadPage.clickUploadButton();

        const successMessage = await uploadPage.getSuccessMessage();
        await expect(successMessage).toContainText('File Uploaded!');

        const fileNameElement = await uploadPage.getUploadedFileName();
        await expect(fileNameElement).toHaveText(fileName);
    }
})


test('Uploading large file (~25MB)', async({page}) =>{
    const uploadPage = new UploadPage(page);
    await uploadPage.visit();

    const fileName = 'large-file.exe'
    const filePath = path.resolve(__dirname, `../test-data/${fileName}`);
        
    await uploadPage.setFile(filePath);
    await uploadPage.clickUploadButton();

    const successMessage = await uploadPage.getSuccessMessage();
    await expect(successMessage).toContainText('File Uploaded!');

    const fileNameElement = await uploadPage.getUploadedFileName();
    await expect(fileNameElement).toHaveText(fileName);
})

test('Fail to upload without selecting a file', async({page}) =>{
    const uploadPage = new UploadPage(page);
    await uploadPage.visit();

    await uploadPage.clickUploadButton();

    const successMessage = await uploadPage.getSuccessMessage();
    await expect(successMessage).not.toBeVisible();
})
