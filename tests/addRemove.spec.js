import { test, expect } from "@playwright/test";
import { AddRemovePage } from '../page-objects/AddRemovePage';

test("Check buttons functionality", async ({page}) =>{
  const addRemove = new AddRemovePage (page)

  await addRemove.visit()
  await addRemove.addElement()
  await expect(addRemove.deleteButton).toBeVisible()

  await addRemove.deleteElement()
  await expect(addRemove.deleteButton).not.toBeVisible()
})
