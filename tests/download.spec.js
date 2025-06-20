import {test, expect} from "@playwright/test";
import fs from 'fs';
import { DownloadPage } from "../page-objects/DownloadPage";

// Test is skiped as /download page is unavailable 
test.skip('User can download file successfuly', async ({page}) =>{
    const downloadPage = new DownloadPage;
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
        await downloadPage.visit();

        const downloadDir = path.resolve(__dirname, '../test-data/downloads'); // Define download directory
        const download = await downloadPage.triggerDownload(fileName);
        // Save the downloaded file to the desired location
        const downloadedFilePath = path.resolve(downloadDir, fileName);
        
        await download.saveAs(downloadedFilePath);

        // Verify the file is downloaded
        expect(fs.existsSync(downloadedFilePath)).toBeTruthy();
    }
})