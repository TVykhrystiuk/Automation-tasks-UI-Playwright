export class AddRemovePage{
    constructor (page) {
        this.page = page
        this.addElementButton = page.getByRole('button', { name: 'Add Element' })
        this.deleteButton = page.getByRole('button', { name: 'Delete' }).first()
    }

    visit = async () =>{
        await this.page.goto('/add_remove_elements/');
    }

    addElement = async () =>{
        await this.addElementButton.click()
    }

    deleteElement = async () =>{
        await this.deleteButton.click()
    }
}
