export class DropdownPage{
    constructor (page) {
        this.page = page;
        this.dropdown = page.locator('#dropdown');
    }  

    async visit() {
        await this.page.goto('/dropdown');
    }

    async selectOptionByValue(value){
        await this.dropdown.selectOption(value);
    }

    async getDefaultOptionText() {
        return await this.dropdown.locator('option').nth(0).textContent();
    }

    async isDropdownDisabled() {
        return await this.dropdown.isDisabled();
    }
}