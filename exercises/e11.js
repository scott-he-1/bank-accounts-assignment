// EXERCISE 11
// Return an array of withdrawal sums of each bank account
// Array example: bankAccounts in /data/data.js
// getAllWithdrawals(bankAccounts) => [3432, 43242.34, 23432]

export function getAllWithdrawals(array) {
  let tempArray = [];
  for (const person of array) {
    if (person.withdrawals) {
      let sum = 0;
      for (const withdrawal of person.withdrawals) {
        sum += withdrawal;
      }
      tempArray.push(sum);
    } else {
      tempArray.push(0)
    }
  }
  return tempArray;
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-11"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
