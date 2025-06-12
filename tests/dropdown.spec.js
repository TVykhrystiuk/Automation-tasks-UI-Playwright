import {test,expect} from "@playwright/test"
import { DropdownPage } from "../page-objects/DropdownPage"


test('Select option from dropdown', async({page}) => {
    const dropdown = new DropdownPage(page) 

    await dropdown.visit()


    // Locate dropdown and elect any option
    // const dropdownList = page.locator('#dropdown');
    await page.pause()
    const isSelected = await DropdownPage.dropdownList.selectOption({ value: '2' }); // or ({ value: '2' }) 
    
    // Verify the selected option
    
    await expect(selectedOption).toHaveText('Option 2');
    
  })
