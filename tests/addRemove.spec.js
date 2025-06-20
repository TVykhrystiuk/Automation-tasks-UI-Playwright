import { test, expect } from "@playwright/test";
import { AddRemovePage } from '../page-objects/AddRemovePage';

test.describe('Add/Remove Elements Page', () => {
  let addRemovePage;

  test.beforeEach(async ({page}) =>{
    addRemovePage = new AddRemovePage(page);
    await addRemovePage.visit();
  });
  

  test("Check buttons functionality", async () =>{
    await addRemovePage.addElement();
    await expect(addRemovePage.deleteButton).toBeVisible();

    await addRemovePage.deleteElement();
    await expect(addRemovePage.deleteButton).not.toBeVisible();
  })


  test('Add and remove multiple elements', async ()=>{
    const count = 15;
    
    for(let i = 0; i < count; i++){
      await addRemovePage.addElement()
    }

    await expect(addRemovePage.deleteButton).toHaveCount(count);

    for(let i = 0; i < count; i++){
      await addRemovePage.deleteElement()
    }

    await expect(addRemovePage.deleteButton).toHaveCount(0);
  }) 


  test('Delete specific element (nth)', async () =>{
    // Add 3 elements
    for(let i = 0; i < 3; i++){
      await addRemovePage.addElement()
    }

    await expect(addRemovePage.deleteButton).toHaveCount(3);

    // Remove the second button (index 1)
    await addRemovePage.deleteElementAt(1);

    // Verify that only 2 buttons remain
    await expect(addRemovePage.deleteButton).toHaveCount(2);
  })


  test('Negative: No delete buttons are present initially', async () =>{
    await expect(addRemovePage.deleteButton).toHaveCount(0);
  });
  
});




