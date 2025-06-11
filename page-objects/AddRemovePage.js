import { expect } from "@playwright/test";

export class AddRemovePage{
    constructor (page) {
        this.page = page

        this.addElementButton = page.getByRole('button', { name: 'Add Element' })
        this.deleteButton = page.getByRole('button', { name: 'Delete' }).first()
    }

    visit = async () =>{
        // Navigate to the page  
        await this.page.goto('/add_remove_elements/');
    }

    addElement = async () =>{
        // Locate and click the "Add Element" button
        await this.addElementButton.waitFor()
        await this.addElementButton.click()
        await expect(this.deleteButton).toBeVisible()
    }

    deleteElement = async () =>{
        // Click the "Delete" button and ensure the button is no longer visible 
        // await expect(this.deleteButton).toBeVisible()
        await this.deleteButton.waitFor()
        await this.deleteButton.click()
        await expect(this.deleteButton).not.toBeVisible()
    }

    //await this.page.pause() 
}
