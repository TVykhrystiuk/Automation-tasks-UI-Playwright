import { test, expect } from "@playwright/test";
import { CheckboxesPage } from "../page-objects/CheckboxesPage";

test('Check checkboxes', async ({page}) => {
    const checkboxes = new CheckboxesPage(page)

    await checkboxes.visit()

    for (let i = 0; i < checkboxes.length; i++) {
         const checkbox = checkboxes[i];
 
         // Read the checkbox state
         const isChecked = await checkbox.isChecked();
         console.log(`Checkbox ${i + 1} is ${isChecked ? 'selected' : 'deselected'}`);
 
         // Toggle the checkbox state
         if (isChecked) {
             console.log(`Deselecting checkbox ${i + 1}`);
             await checkbox.uncheck();
         } else {
             console.log(`Selecting checkbox ${i + 1}`);
             await checkbox.check();
         }
    }
  } )