import {test, expect} from "@playwright/test";
import path from 'path';
import { UploadPage } from "../page-objects/UploadPage.js";
import { supportedFiles } from "../test-data/downloadFiles.js";


test. describe('Upload Files Tests', () => {
    let uploadPage;

    test.beforeEach(async ({page}) => {
        uploadPage = new UploadPage(page);
        await uploadPage.visit();
    });

    test('User can upload file successfuly', async() =>{
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
    });


    test('Uploading large file (~25MB)', async() =>{
        const fileName = 'large-file.exe'
        const filePath = path.resolve(__dirname, `../test-data/${fileName}`);
            
        await uploadPage.setFile(filePath);
        await uploadPage.clickUploadButton();

        const successMessage = await uploadPage.getSuccessMessage();
        await expect(successMessage).toContainText('File Uploaded!');

        const fileNameElement = await uploadPage.getUploadedFileName();
        await expect(fileNameElement).toHaveText(fileName);
    });

    test('Fail to upload without selecting a file', async() =>{
        await uploadPage.clickUploadButton();

        const successMessage = await uploadPage.getSuccessMessage();
        await expect(successMessage).not.toBeVisible();
    });
});

