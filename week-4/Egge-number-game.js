/* 
Title: Web 231 Assign_4.doxs
Author: Richard Krasso
Date: 11/11/2022
Description: The instructions for Assignment 4 – Number Guessing Game
*/
/*
Title: react_es6_ternary.asp (https://www.w3schools.com/react/react_es6_ternary.asp) 
Author: w3schools.com
Date: 11/11/2022
Description: An article using code snippets to explain how to use Ternary Operators
*/

// Corresponds with 0.a
const rnd = Math.floor(Math.random() * 10 + 1);

// Corresponds with 5.a
document.getElementById(`btnSubmit`).onclick = function () {
  guess();
};

// Corresponds with 5.b
function guess() {
  let myNumber = document.getElementById(`txtMyNumber`).value;

  // Corresponds with 5.c, 5.d, 5.e, and 5.f 
  if (myNumber == rnd) {
    document.getElementById(
      `txtResults`
    ).innerHTML = `Congratulations! You picked the correct number!`;
  } else if ((myNumber != rnd && myNumber > 0) || myNumber > 11) {
    document.getElementById(`txtResults`).innerHTML =
      myNumber > rnd
        ? `The number is less than ${myNumber}.`
        : `The number is greater than ${myNumber}.`;
  }

  // I refactored the code above, so I was able to save the "else" condition for invalid answers
  else {
    document.getElementById(
      `txtResults`
    ).innerHTML = `${myNumber} is not a valid answer.`;
  }
}
