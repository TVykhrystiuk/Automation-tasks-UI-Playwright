import {test, expect} from "@playwright/test";
import path from 'path';
import fs from 'fs';
import { DownloadPage } from "../page-objects/DownloadPage";
import { supportedFiles } from "../test-data/downloadFiles";

// Test is skiped as /download page is unavailable 
test('User can download file successfuly', async ({page}) =>{
    const downloadPage = new DownloadPage(page);

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