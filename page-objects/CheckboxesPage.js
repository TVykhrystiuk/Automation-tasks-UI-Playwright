export class CheckboxesPage{
    
    constructor (page) {
        this.page = page
        this.checkboxes = page.getByRole('input[type="checkbox"]')
    }  

    visit = async () =>{
        await this.page.goto('/checkboxes');
    }

}
