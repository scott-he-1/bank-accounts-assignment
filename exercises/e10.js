// EXERCISE 10
// Return an array of account holders names that contains a given letter
// Array example: bankAccounts in /data/data.js
// getClientsWithLetterInName(bankAccounts, 'e') => ['Kevin', 'Steven', ...]

export function getClientsWithLetterInName(array, letter) {
  let tempArray = [];
  for (const person of array) {
    for (const character of person.name) {
      let hasLetterAlready = false;
      if ((character === letter.toUpperCase() || character === letter.toLowerCase()) && (hasLetterAlready === false)) {
        hasLetterAlready = true;
        tempArray.push(person.name);
      }
    }
  }
  return tempArray;
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-10"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
