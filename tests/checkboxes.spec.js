import { test, expect } from "@playwright/test";
import { CheckboxesPage } from "../page-objects/CheckboxesPage";

test.describe('Checkboxes Page Tests', () => {
  let checkboxesPage;

  test.beforeEach(async ({page}) => {
    checkboxesPage = new CheckboxesPage(page);
    await checkboxesPage.visit();
  });


  test('Check all checkboxes', async () => {
    await checkboxesPage.checkAll();

    const count = await checkboxesPage.checkboxes.count();
    for (let i = 0; i < count; i++) {
      await expect(checkboxesPage.checkboxes.nth(i)).toBeChecked()
    }
  });


  test('Uncheck all checkboxes', async () => {
    await checkboxesPage.uncheckAll();

    const count = await checkboxesPage.checkboxes.count();
    for (let i = 0; i < count; i++) {
      await expect(checkboxesPage.checkboxes.nth(i)).not.toBeChecked()
    }
  });


  test('Check default checkbox states on page load', async () => {
    await checkboxesPage.logDefaultStates();
  });

  test('Toggle a single checkbox and verify state', async () =>{
    const index = 0
    const checkbox = checkboxesPage.checkboxes.nth(index);
    const isCheckedBefore = await checkbox.isChecked();

    await checkboxesPage.toggleCheckboxAt(index);

    if (isCheckedBefore) {
      await expect(checkbox).not.toBeChecked()
    } else {
      await expect(checkbox).toBeChecked()
    }
  });
});

