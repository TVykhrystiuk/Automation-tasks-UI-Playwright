export class DropdownPage{
    constructor (page) {
        this.page = page
        this.dropdownList = page.locator('#dropdown');
        this.selectedOption = this.dropdownList.locator('option:checked');
    }  

    visit = async () =>{
        await this.page.goto('/dropdown');
    }
}