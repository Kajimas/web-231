/*
Title: Web 231 Assign_8.doxs
Author: Richard Krasso
Date: 12/10/2022
Description: The instructions for Assignment 8 – Alphabet Game
*/
/*
Title: for...in (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in)
Author: developer.mozilla.org
Date: 12/10/2022
Description: An article using code snippets to explain how to use the for...in loop
*/


//This section corresponds with 0.a
const alphabet = [
  `A`,
  `B`,
  `C`,
  `D`,
  `E`,
  `F`,
  `G`,
  `H`,
  `I`,
  `J`,
  `K`,
  `L`,
  `M`,
  `N`,
  `O`,
  `P`,
  `Q`,
  `R`,
  `S`,
  `T`,
  `U`,
  `V`,
  `W`,
  `X`,
  `Y`,
  `Z`,
];

//This section corresponds with 0.b
let alphabetOutput = ``;

//This section corresponds with 0.c
for (const x in alphabet) {
  alphabetOutput += `${alphabet[x]}, `;
}

//This section corresponds with 0.d
alphabetOutput = alphabetOutput.slice(0, 76);
document.getElementById(`alphabet`).innerHTML = alphabetOutput;

//This section corresponds with 5.a, 5.b, 5.c, 5.d, and 5.f
document.getElementById(`btnFindLetter`).onclick = function () {
  let pos = document.getElementById(`txtPosition`).value;
  let letter = alphabet[Number(pos) - 1];
  return letter === undefined
    ? (document.getElementById(
        `txtResults`
      ).innerHTML = `There are not ${pos} letters in the alphabet`)
    : letter !== undefined
    ? (document.getElementById(
        `txtResults`
      ).innerHTML = `${letter} is at position ${pos} in the alphabet`)
    : alert(`Something went wrong.`);
};
