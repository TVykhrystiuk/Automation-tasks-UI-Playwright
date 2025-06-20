export class DownloadPage{
    constructor(page){
        this.page = page;
        this.downloadLink = (fileName) => page.locator(`a[href*="${fileName}"]`);
    }

    async visit(){
        await this.page.goto('/download');
    }

    async triggerDownload(fileName) {
        const [download] = await Promise.all([
            this.page.waitForEvent('download'),
            this.downloadLink(fileName).click()
        ]);
        return download;
    }
}