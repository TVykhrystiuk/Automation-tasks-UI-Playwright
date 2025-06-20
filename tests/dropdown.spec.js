import {test,expect} from "@playwright/test";
import { DropdownPage } from "../page-objects/DropdownPage";

test.describe('Dropdown Page Tests', () =>{
  let dropdownPage;

  test.beforeEach(async ({page}) => {
    dropdownPage = new DropdownPage(page);
    await dropdownPage.visit();
  });

  test('Select option from dropdown and verify selection', async() => {
    const value = '1';
    await dropdownPage.selectOptionByValue(value);
    
    await expect(dropdownPage.dropdown).toHaveValue(value);
    await expect(dropdownPage.dropdown).toContainText(`Option ${value}`);
  });

  test('Verify default option text is correct', async () => {
    const defaultOptionText = await dropdownPage.getDefaultOptionText();
    expect(defaultOptionText).toBe('Please select an option');
  });

  test('Dropdown is enabled and interactable', async () => {
    const isDisabled = await dropdownPage.isDropdownDisabled();
    expect(isDisabled).toBe(false);
  });
});



