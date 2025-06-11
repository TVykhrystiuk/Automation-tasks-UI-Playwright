// //   5. Algorithms

// //   1. Sum of Numbers: Write a program that calculates the sum of all numbers from 1 to N, where N is input by the user.
// let number = 5
// let sum = 0;
// for (let i=0; i <= number; i++){
//   sum += i;
// }
// console.log(sum);

// // 2. Factorial: Implement an algorithm to compute the factorial of a number N.
// let number = 5
// let factorial = 1;
// for (let i=1; i <= number; i++){
//   factorial *= i;
// }
// console.log(factorial);

// // 3. Maximum Value Search: Find the maximum value in an array of integers.
// let numbers = [1, 3, 55, 8]
// let maxValue = numbers[0]
// for(let i = 0; i < numbers.length; i++){
//   if(maxValue < numbers[i]) maxValue = numbers[i]
// }
// console.log(maxValue);

// // 4. Minimum Value Search: Find the minimum value in an array of integers.
// let numbers = [10, 30, 55, 8]
// let minValue = numbers[0]
// for(let i = 0; i < numbers.length; i++){
//   if(minValue > numbers[i]) minValue = numbers[i]
// }
// console.log(minValue);

// // 5. Palindrome: Determine whether a string is a palindrome (reads the same forwards and backwards).
// function isPalindrome (string){
//   let cleanedString = string.toLowerCase().replace(/[^a-z0-9]/g, '');
//   let reversed = cleanedString.split('').reverse().join('');
//   return cleanedString === reversed;
// }

// let wordToCheck = "Madam" 
// console.log(isPalindrome(wordToCheck));
// console.log(isPalindrome("Was it a car or a cat I saw?"));


// // 6. Element Search: Write a function that searches for a specified element in an array and returns its index (if the element is found) or -1 (if the element is not found).
// function searchElement(array, search){
//   for (let i = 0; i < array.length; i++){
//     if (array[i] === search) {
//       return i;
//     }  
//   }
//   return -1;
// }

// let data = ["string", 3, "str"]
// let search = "string"
// console.log(searchElement(data, search));




// // 4. Dev Tools
// // Task 4.1 
// let dropdown = document.querySelector('#dropdown');
// let options = Array.from(dropdown.options); // Convert options to an array

// // Check if 'Option 1' exists in the list
// let containsOption1 = options.some(option => option.text.trim() === 'Option 1');

// // Print the result (true/false)
// console.log(containsOption1);

// //   // Check if 'Option 1' exists in the list (another example)
// // let containsOption1 = false;
// // for (let i = 0; i < options.length; i++) {
// //     if (options[i].text.trim() === 'Option 1') {
// //         containsOption1 = true;
// //         break; // Exit loop early if found
// //     }
// // }



// // Task 4.2 
// // JSON Data
// let data = {
//   firstname: 'Ana', 
//   lastname: 'Pooh', 
//   gender: 'Female', 
//   yearsOfExpirience: 7, 
//   profession: ['Automation Tester', 'Manual Tester'], 
//   tools: ['Selenium Webdriver', 'Selenium IDE'],
//   continent: 'Antartica' 
// }

// // Fill First Name and Last Name
// document.querySelector('[name = "firstname"]').value = data.firstname;
// document.querySelector('[name = "lastname"]').value = data.lastname;

// // Select Gender and Years of Experience
// document.querySelector(`input[name = "sex"][value="${data.gender}"]`).checked = true;
// document.querySelector(`input[name = "exp"][value="${data.yearsOfExpirience}"]`).checked = true;

// // Select Professions
// data.profession.forEach(prof => {
//   let proffesionInput = document.querySelector(`input[name = "profession"][value="${prof}"]`);
//   if(proffesionInput) proffesionInput.checked = true;
// });

// // Select Tools
// data.tools.forEach(tool => {
//   let toolInput = document.querySelector(`input[name = "tool"][value="${tool}"]`);
//   if(toolInput) toolInput.checked = true;
// })

// // Select Continent
// document.querySelector('#continents').value = data.continent;