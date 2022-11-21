/* 
Title: Web 231 Assign_5.doxs
Author: Richard Krasso
Date: 11/15/2022
Description: The instructions for Assignment 5 – Sequence Game
*/
/* 
Title: Conditional (ternary) operator
Author: developer.mozilla.org
Date: 11/15/2022
Description: A page using code snippets to demonstrate how to use ternary operators
*/

//Corresponds with exhibit 5.a
document.getElementById(`btnDisplaySequence`).onclick = function () {
  sequenceSelect();
};


function sequenceSelect() {

  //Corresponds with exhibit 5.b
  let choice = document.getElementById(`sequence`).value;

  //Corresponds with exhibit 5.d
  function fibonacciChoice() {
    let num1 = 0;
    let num2 = 1;
    let next = 0;
    let fibonacciSequenceText = ``;

    while (num1 <= 40) {
      fibonacciSequenceText += `${num1}, `;
      next = num1 + num2;
      num1 = num2;
      num2 = next;
    }

    document.getElementById(`txtSequenceResults`).innerHTML =
      fibonacciSequenceText.slice(0, -2);
  }

  //Corresponds with exhibit 5.e
  function evenChoice() {
    let num = 0;
    let evenSequenceText = ``;

    while (num < 20) {
      num = num + 2;
      evenSequenceText += `${num}, `;
    }

    document.getElementById(`txtSequenceResults`).innerHTML =
      evenSequenceText.slice(0, -2);
  }

  //Corresponds with exhibit 5.f
  function oddChoice() {
    let num = 1;
    let oddSequenceText = ``;

    while (num < 20) {
      oddSequenceText += `${num}, `;
      num = num + 2;
    }

    document.getElementById(`txtSequenceResults`).innerHTML =
      oddSequenceText.slice(0, -2);
  }

  // Corresponds with exhibits 5.c and 5.g
  // Also corresponds with exhibits 5.d, 5.e, and 5.f by calling the three functions above
  // I was originally supposed to use if…else if…else if…else, but I was given permission to use ternary operators
  return choice === "select"
    ? alert(`Invalid selection, please try again!`)
    : choice === "fibonacci"
    ? fibonacciChoice()
    : choice === "even"
    ? evenChoice()
    : choice === "odd"
    ? oddChoice()
    : alert(`Something went wrong.`);
}
