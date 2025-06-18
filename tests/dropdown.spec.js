import {test,expect} from "@playwright/test";
import { DropdownPage } from "../page-objects/DropdownPage";


test('Select option from dropdown and verify selection', async({page}) => {
  const dropdownPage = new DropdownPage(page); 
  await dropdownPage.visit();

  const value = '1';
  await dropdownPage.selectOptionByValue(value);
  
  await expect(dropdownPage.dropdown).toHaveValue(value);
  await expect(dropdownPage.dropdown).toContainText(`Option ${value}`);
})


test('Verify default option text is correct', async ({ page }) => {
  const dropdownPage = new DropdownPage(page);
  await dropdownPage.visit();

  const defaultOptionText = await dropdownPage.getDefaultOptionText();
  expect(defaultOptionText).toBe('Please select an option');
});


test('Dropdown is enabled and interactable', async ({ page }) => {
  const dropdownPage = new DropdownPage(page);
  await dropdownPage.visit();

  const isDisabled = await dropdownPage.isDropdownDisabled();
  expect(isDisabled).toBe(false);
})
