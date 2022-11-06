/* 
Title: Web 231 Assign_3.doxs
Author: Richard Krasso
Date: 5/11/2022
Description: The instructions for Assignment 3 – Temperature Conversion App
*/
/*
Title: prop_text_value.asp (https://www.w3schools.com/jsref/prop_text_value.asp) 
Author: w3schools.com
Date: 11/5/2022
Description: An article using code snippets to explain how to use the "value" property via HTML and JS
*/

// Corresponds with 5.a
document.getElementById(`btnConvertTemp`).onclick = function () {
  calc();
};

// Corresponds with 5.b
function calc() {
  let fahrenheit = document.getElementById(`txtFahrenheit`).value;
  document.getElementById(`txtConversionResults`).innerHTML = (
    (parseFloat(fahrenheit) - 32) /
    1.8
  ).toFixed(2);
}
