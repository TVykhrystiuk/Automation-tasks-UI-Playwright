import {expect, test} from "@playwright/test"
import { InputPage } from "../page-objects/InputPage"


test('Input handles negative, zero and decimal values', async({page}) => {
   const inputPage  = new InputPage(page);
   await inputPage.visit();
    
    const values = ['123', '-5', '0', '0.5', '05'];
    for(const v of values){
        await inputPage.fillInput(v);
        await expect(inputPage.inputField).toHaveValue(v);
    }
  })


  test('Non-numeric input should not be accepted', async ({page}) =>{
    const inputPage = new InputPage(page);
    await inputPage.visit();

    // Force invalid value 
    await inputPage.forceSetInputValue('abc!@#$%^&*()_+-=');
    
    const value = await inputPage.getInputValue();

    // Verify that the value isn't "abc"
    expect(value).not.toBe('abc!@#$%^&*()_+-=');
})

test('Value can be overwritten correctly', async ({ page }) => {
    const inputPage = new InputPage(page);
    await inputPage.visit();

    await inputPage.fillInput('10');
    await expect(inputPage.inputField).toHaveValue('10');

    await inputPage.fillInput('20');
    await expect(inputPage.inputField).toHaveValue('20');
})

test('Input can be cleared and becomes empty', async ({ page }) => {
    const inputPage = new InputPage(page);
    await inputPage.visit();

    await inputPage.fillInput('55');
    await expect(inputPage.inputField).toHaveValue('55');

    await inputPage.clearInput();
    await expect(inputPage.inputField).toHaveValue('');
})


test('Increment and decrement value using arrows', async ({ page }) => {
    const inputPage = new InputPage(page);
    await inputPage.visit();

    // Ensure field is empty first
    await inputPage.inputField.fill('');

    // Increment (Arrow Up)
    await inputPage.incrementValue();
    await expect(inputPage.inputField).toHaveValue('1');

    // Increment again
    await inputPage.incrementValue();
    await expect(inputPage.inputField).toHaveValue('2');

    // Decrement (Arrow Down)
    await inputPage.decrementValue();
    await expect(inputPage.inputField).toHaveValue('1');
})

test('Input is not disabled', async ({ page }) => {
    const inputPage = new InputPage(page);
    await inputPage.visit();

    const isDisabled = await inputPage.isInputDisabled();
    expect(isDisabled).toBe(false); // or .toBeTruthy() / .toBeFalsy()
})
