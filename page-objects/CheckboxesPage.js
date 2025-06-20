export class CheckboxesPage{
    constructor (page) {
        this.page = page;
        this.checkboxes = page.locator('input[type="checkbox"]');
    }  

    async visit() {
        await this.page.goto('/checkboxes');
    }

    async checkAll() {
        const count = await this.checkboxes.count();
        for (let i = 0; i < count; i++) {
            const checkbox = this.checkboxes.nth(i);
        if (!(await checkbox.isChecked())) {
            await checkbox.check();
        }
        }
    }

    async uncheckAll() {
        const count = await this.checkboxes.count();
        for (let i = 0; i < count; i++) {
            const checkbox = this.checkboxes.nth(i);
            if (await checkbox.isChecked()) {
                await checkbox.uncheck()
            }
        }
    }

    async logDefaultStates() {
        const count = await this.checkboxes.count();
        for (let i = 0; i < count; i++) {
            const isChecked = await this.checkboxes.nth(i).isChecked();
            console.log(`Checkbox ${i} is ${isChecked ? 'checked' : 'unchecked'} by default`);
        }
    }

    async toggleCheckboxAt(index) {
        const checkbox = this.checkboxes.nth(index);
        const isChecked = await checkbox.isChecked();
        if (isChecked) {
            await checkbox.uncheck()
        } else {
            await checkbox.check()
        }
    }
}
