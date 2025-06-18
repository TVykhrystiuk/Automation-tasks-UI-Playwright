export class AddRemovePage{
    constructor (page) {
        this.page = page
        this.addElementButton = page.getByRole('button', { name: 'Add Element' })
        this.deleteButton = page.locator('button.added-manually')
    }

    visit = async () =>{
        await this.page.goto('/add_remove_elements/');
    }

    addElement = async () =>{
        await this.addElementButton.click()
    }

    deleteElement = async () =>{
        const count = await this.deleteButton.count()
        if (count > 0){
            await this.deleteButton.nth(0).click()
        }  
    }

    deleteElementAt = async (index) =>{
        const count = await this.deleteButton.count()
        if(index < count){
            await this.deleteButton.nth(index).click()
        }
    }
}
