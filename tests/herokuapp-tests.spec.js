
const { test, expect } = require('@playwright/test');
const path = require('path');
const fs = require('fs');
const baseUrl = 'https://the-internet.herokuapp.com';


test('Check buttons functionality', async ({ page }) => {
    // Navigate to the page  
    await page.goto(`${baseUrl}/add_remove_elements/`);

    // Locate and click the "Add Element" button
    const addButton = page.getByRole('button', { name: 'Add Element' });
    await addButton.click();

    // Locate the "Delete" button and verify it's presence
    const deleteItem = page.getByRole('button', { name: 'Delete' }).first();
    await expect(deleteItem).toHaveText("Delete");

    // Click the "Delete" button and ensure the button is no longer visible 
    await deleteItem.click();
    await expect(deleteItem).not.toBeVisible();
  });


  test('Check checkboxes', async ({page}) => {
    // Navigate to the page
    await page.goto(`${baseUrl}/checkboxes`);

     // Locate the checkboxes
     const checkboxes = await page.$$('input[type="checkbox"]'); 

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
  

  test('Select option from dropdown', async({page}) => {
    // Navigate to the page
    await page.goto(`${baseUrl}/dropdown`);

    // Locate dropdown and elect any option
    const dropdownList = page.locator('#dropdown');
    const isSelected = await dropdownList.selectOption('2'); // or ({ value: '2' }) 
    
    // Verify the selected option
    const selectedOption = dropdownList.locator('option:checked');
    await expect(selectedOption).toHaveText('Option 2');
  })


  test('Filling an input field', async({page}) => {
    // Navigate to the page
    await page.goto(`${baseUrl}/inputs`);
    
    // Locate an input and enter a value
    const inputField = page.getByRole('spinbutton');
    const valueToFill = '-1'
    await inputField.fill(valueToFill);
    
    // Verify filled value
    const valueInInputField = await inputField.inputValue();
    expect(valueInInputField).toBe(valueToFill);
    
    // expect (await inputField.inputValue()).toBe(valueToFill); // simplier way
  })

  test('User logged in successfully', async({page}) => {
    // Navigate to the page
    await page.goto(`${baseUrl}/login`);
    
    // Locate and fill username and password
    const usernameField = page.getByLabel('Username')
    const passwordField = page.getByLabel('Password')
    const userInfo = {
      username: "tomsmith",
      password: "SuperSecretPassword!"
    }
    await usernameField.fill(userInfo.username);
    await passwordField.fill(userInfo.password);
    
    //Click Login button
    const loginButton = page.getByRole('button', { name: 'Login' });
    await loginButton.click();

    // Check success message is displayed
    const successMessage = page.locator('.flash.success');
    await expect(successMessage).toContainText('You logged into a secure area!');
  })


  test('Check uploading/downloading a file', async({page}) =>{
    // Uploading
    // Navigate to page
    await page.goto(`${baseUrl}/upload`);

    //Upload file
    const fileName = 'Test.pdf'
    const filePath = path.resolve(__dirname, `${fileName}`);
    const fileInput = page.locator('#file-upload');
    await fileInput.setInputFiles(filePath);

    const uploadButton = page.getByRole('button', { name: 'Upload' });
    uploadButton.click();
    
    // Check success message is displayed
    const successMessage = page.getByRole('heading', { name: 'File Uploaded!' });
    await expect(successMessage).toContainText('File Uploaded!');

    //Downloading
    // Navigate to page
    await page.goto(`${baseUrl}/download`);

    // Download file
    const downloadDir = path.resolve(__dirname, 'downloads'); // Define download directory
    const [download] = await Promise.all([
      page.waitForEvent('download'), // Wait for the download to start
      page.click(`a[href*='${fileName}']`) // Trigger the download
    ]);
    // Save the downloaded file to the desired location
    const downloadedFilePath = path.resolve(downloadDir, fileName);
    await download.saveAs(downloadedFilePath);

    // Verify the file is downloaded
    expect(fs.existsSync(downloadedFilePath)).toBeTruthy();
})

// comment to just to test push to remote repository