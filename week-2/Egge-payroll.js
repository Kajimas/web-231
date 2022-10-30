/*
Title: Date (developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) 
Author: developer.mozilla.org
Date: 10/30/2022
Description: An article using code snippets to explain how to use Date()
*/

//variables for Employee record 1
let firstNameAdam = `Adam`;
let lastNameAdam = `Adamson`;
let addressAdam = `701 main street`;
let hireDateAdam = new Date().toLocaleDateString("en-US");
let payRateAdam = (100.99).toFixed(1);

//variables for Employee record 2
let firstNameBarnaby = `Barnaby`;
let lastNameBarnaby = `Barnabyson`;
let addressBarnaby = `702 main street`;
let hireDateBarnaby = new Date().toLocaleDateString("en-US");
let payRateBarnaby = (101.99).toFixed(1);

//variables for Employee record 3
let firstNameCaspar = `Caspar`;
let lastNameCaspar = `Casparson`;
let addressCaspar = `703 main street`;
let hireDateCaspar = new Date().toLocaleDateString("en-US");
let payRateCaspar = (102.99).toFixed(1);

//assigns the first list's items to the variables for Employee record 1
document.getElementById(`txtFirstNameAdam`).innerHTML = firstNameAdam;
document.getElementById(`txtLastNameAdam`).innerHTML = lastNameAdam;
document.getElementById(`txtAddressAdam`).innerHTML = addressAdam;
document.getElementById(`txtHireDateAdam`).innerHTML = hireDateAdam;
document.getElementById(`txtPayRateAdam`).innerHTML = payRateAdam;

//assigns the second list's items to the variables for Employee record 2
document.getElementById(`txtFirstNameBarnaby`).innerHTML = firstNameBarnaby;
document.getElementById(`txtLastNameBarnaby`).innerHTML = lastNameBarnaby;
document.getElementById(`txtAddressBarnaby`).innerHTML = addressBarnaby;
document.getElementById(`txtHireDateBarnaby`).innerHTML = hireDateBarnaby;
document.getElementById(`txtPayRateBarnaby`).innerHTML = payRateBarnaby;

//assigns the third list's items to the variables for Employee record 3
document.getElementById(`txtFirstNameCaspar`).innerHTML = firstNameCaspar;
document.getElementById(`txtLastNameCaspar`).innerHTML = lastNameCaspar;
document.getElementById(`txtAddressCaspar`).innerHTML = addressCaspar;
document.getElementById(`txtHireDateCaspar`).innerHTML = hireDateCaspar;
document.getElementById(`txtPayRateCaspar`).innerHTML = payRateCaspar;
