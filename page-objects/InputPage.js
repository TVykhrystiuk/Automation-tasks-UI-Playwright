export class InputPage{
    constructor (page){
        this.page = page;
        this.inputField = page.getByRole('spinbutton');
    }

    async visit(){
        await this.page.goto('/inputs');
    }

    async fillInput(value){
        await this.inputField.fill(value);
    }

    async forceSetInputValue(value) {
        await this.page.evaluate((val) => {
            document.querySelector('input[type="number"]').value = val
        }, value);
    }

    async getInputValue(){
        return await this.inputField.inputValue();
    }

    async clearInput(){
        return await this.inputField.fill('');
    }

    async incrementValue() {
    await this.inputField.focus();
    await this.page.keyboard.press('ArrowUp');
    }

    async decrementValue() {
        await this.inputField.focus();
        await this.page.keyboard.press('ArrowDown');
    }

    async isInputDisabled(){
        return await this.inputField.isDisabled();
    }
}