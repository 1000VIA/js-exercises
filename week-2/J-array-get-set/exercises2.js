/*
  Array setters
  -------------
  WITHOUT changing the array literal declaration,
  - assign the number 4 to the end of this array
  - change the first value in the array to the number 1
*/

let numbers = [2, 2, 3]; // Don't change this array numbersliteral declarationnumbers
console.log(numbers);

// numbers[3] = 4;
numbers.push(4);

numbers[0] = 1;
/* 
  DO NOT EDIT BELOW THIS LINE
  --------------------------- */
console.log(numbers);

/* 
  EXPECTED RESULT
  ---------------
  [1, 2, 3, 4]
*/