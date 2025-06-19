export class UploadPage{
    constructor(page){
        this.page = page;
        this.fileInput = page.locator('#file-upload');
        this.uploadButton = page.getByRole('button', { name: 'Upload' });
        this.successMessage = page.getByRole('heading', { name: 'File Uploaded!' });
        this.uploadedFileName = page.locator('#uploaded-files');
    }

    async visit(){
        await this.page.goto('/upload')
    }

    async setFile(filePath){
        await this.fileInput.setInputFiles(filePath);
    }

    async clickUploadButton(){
        await this.uploadButton.click();
    }

    async getSuccessMessage(){
        return this.successMessage;
    }

    async getUploadedFileName() {
        return this.uploadedFileName;
    }
}

