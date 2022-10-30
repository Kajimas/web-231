/*
Title: event_onclick.asp (https://www.w3schools.com/JSREF/event_onclick.asp) 
Author: w3schools.com
Date: 10/29/2022
Description: An article using code snippets to explain how to use the "onclick" event via HTML and JS
*/

// This is a const instead of a let because names rarely change, and I am the only author
const lastName = `Egge`;

// Corresponds with exhibit B
document.getElementById(
  `txtMyWorld`
).innerHTML = `You are now in ${lastName}'s world!`;

function btn() {
  alert(`WEB 231 - Enterprise JavaScript I`);
}

//Corresponds with exhibit D
document.getElementById(`btnMyCourse`).onclick = function () {
  btn();
};
