/*
Title: Web 231 Assign_7.doxs
Author: Richard Krasso
Date: 12/4/2022
Description: The instructions for Assignment 7 – Javazon
*/
/*
Title: Classes (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)
Author: developer.mozilla.org
Date: 12/4/2022
Description: An article using code snippets to explain how to use Classes
*/

//Corresponds with 0.a, 0.b, and 0.c
class Product {
  constructor(id, description, price, quantity) {
    this.id = id;
    this.description = description;
    this.price = price;
    this.quantity = quantity;
    this.totalValue = (quantity * price).toFixed(2);
  }
}
class Services {
  constructor(id, description, hourlyRate, min) {
    this.id = id;
    this.description = description;
    this.hourlyRate = hourlyRate.toFixed(2);
    this.min = min;
  }
}
class Employee {
  constructor(id, firstName, lastName, salary) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.salary = salary.toFixed(2);
  }
}

//Corresponds with 0.d
let firstProduct = new Product(0, `This product is first`, 1.0, 1);
let secondProduct = new Product(1, `This product is second`, 1.0, 2);
let thirdProduct = new Product(2, `This product is third`, 2.0, 3);
let fourthProduct = new Product(3, `This product is fourth`, 3.0, 4);
let fifthProduct = new Product(4, `This product is fifth`, 5.0, 5);

//Corresponds with 0.e
let firstService = new Services(0, `This service is first`, 8.0, 6);
let secondService = new Services(1, `This service second`, 13.0, 7);
let thirdService = new Services(2, `This service is third`, 21.0, 8);

//Corresponds with 0.f
let firstEmployee = new Employee(0, `Adam`, `Anderson`, 34.0);
let secondEmployee = new Employee(1, `Bastion`, `Books`, 55.0);
let thirdEmployee = new Employee(2, `Carl`, `Casanova`, 89.0);
let fourthEmployee = new Employee(3, `Damion`, `Darwin`, 144.0);
let fifthEmployee = new Employee(4, `Edger`, `Eddington`, 233.0);

//Corresponds with 0.g, 0.h, 0.i
let products = document.getElementById(`products`);
let services = document.getElementById(`services`);
let employees = document.getElementById(`employees`);

//Corresponds with 5.c
document.getElementById(`txtFirstProductId`).innerHTML = firstProduct.id;
document.getElementById(`txtFirstProductDescription`).innerHTML =
  firstProduct.description;
document.getElementById(`txtFirstProductPrice`).innerHTML = firstProduct.price;
document.getElementById(`txtFirstProductQuantity`).innerHTML =
  firstProduct.quantity;
document.getElementById(`txtFirstProductTotalValue`).innerHTML =
  firstProduct.totalValue;

document.getElementById(`txtSecondProductId`).innerHTML = secondProduct.id;
document.getElementById(`txtSecondProductDescription`).innerHTML =
  secondProduct.description;
document.getElementById(`txtSecondProductPrice`).innerHTML =
  secondProduct.price;
document.getElementById(`txtSecondProductQuantity`).innerHTML =
  secondProduct.quantity;
document.getElementById(`txtSecondProductTotalValue`).innerHTML =
  secondProduct.totalValue;

document.getElementById(`txtThirdProductId`).innerHTML = thirdProduct.id;
document.getElementById(`txtThirdProductDescription`).innerHTML =
  thirdProduct.description;
document.getElementById(`txtThirdProductPrice`).innerHTML = thirdProduct.price;
document.getElementById(`txtThirdProductQuantity`).innerHTML =
  thirdProduct.quantity;
document.getElementById(`txtThirdProductTotalValue`).innerHTML =
  thirdProduct.totalValue;

document.getElementById(`txtFourthProductId`).innerHTML = fourthProduct.id;
document.getElementById(`txtFourthProductDescription`).innerHTML =
  fourthProduct.description;
document.getElementById(`txtFourthProductPrice`).innerHTML =
  fourthProduct.price;
document.getElementById(`txtFourthProductQuantity`).innerHTML =
  fourthProduct.quantity;
document.getElementById(`txtFourthProductTotalValue`).innerHTML =
  fourthProduct.totalValue;

document.getElementById(`txtFifthProductId`).innerHTML = fifthProduct.id;
document.getElementById(`txtFifthProductDescription`).innerHTML =
  fifthProduct.description;
document.getElementById(`txtFifthProductPrice`).innerHTML = fifthProduct.price;
document.getElementById(`txtFifthProductQuantity`).innerHTML =
  fifthProduct.quantity;
document.getElementById(`txtFifthProductTotalValue`).innerHTML =
  fifthProduct.totalValue;

//Corresponds with 5.d
document.getElementById(`txtFirstServiceId`).innerHTML = firstService.id;
document.getElementById(`txtFirstServiceDescription`).innerHTML =
  firstService.description;
document.getElementById(`txtFirstServiceRate`).innerHTML =
  firstService.hourlyRate;
document.getElementById(`txtFirstServiceMin`).innerHTML = firstService.min;

document.getElementById(`txtSecondServiceId`).innerHTML = secondService.id;
document.getElementById(`txtSecondServiceDescription`).innerHTML =
  secondService.description;
document.getElementById(`txtSecondServiceRate`).innerHTML =
  secondService.hourlyRate;
document.getElementById(`txtSecondServiceMin`).innerHTML = secondService.min;

document.getElementById(`txtThirdServiceId`).innerHTML = thirdService.id;
document.getElementById(`txtThirdServiceDescription`).innerHTML =
  thirdService.description;
document.getElementById(`txtThirdServiceRate`).innerHTML =
  thirdService.hourlyRate;
document.getElementById(`txtThirdServiceMin`).innerHTML = thirdService.min;

//Corresponds with 5.e
document.getElementById(`txtFirstEmployeeId`).innerHTML = firstEmployee.id;
document.getElementById(`txtFirstEmployeeLastName`).innerHTML =
  firstEmployee.lastName;
document.getElementById(`txtFirstEmployeeFirstName`).innerHTML =
  firstEmployee.firstName;
document.getElementById(`txtFirstEmployeeSalary`).innerHTML =
  firstEmployee.salary;

document.getElementById(`txtSecondEmployeeId`).innerHTML = secondEmployee.id;
document.getElementById(`txtSecondEmployeeLastName`).innerHTML =
  secondEmployee.lastName;
document.getElementById(`txtSecondEmployeeFirstName`).innerHTML =
  secondEmployee.firstName;
document.getElementById(`txtSecondEmployeeSalary`).innerHTML =
  secondEmployee.salary;

document.getElementById(`txtThirdEmployeeId`).innerHTML = thirdEmployee.id;
document.getElementById(`txtThirdEmployeeLastName`).innerHTML =
  thirdEmployee.lastName;
document.getElementById(`txtThirdEmployeeFirstName`).innerHTML =
  thirdEmployee.firstName;
document.getElementById(`txtThirdEmployeeSalary`).innerHTML =
  thirdEmployee.salary;

document.getElementById(`txtFourthEmployeeId`).innerHTML = fourthEmployee.id;
document.getElementById(`txtFourthEmployeeLastName`).innerHTML =
  fourthEmployee.lastName;
document.getElementById(`txtFourthEmployeeFirstName`).innerHTML =
  fourthEmployee.firstName;
document.getElementById(`txtFourthEmployeeSalary`).innerHTML =
  fourthEmployee.salary;

document.getElementById(`txtFifthEmployeeId`).innerHTML = fifthEmployee.id;
document.getElementById(`txtFifthEmployeeLastName`).innerHTML =
  fifthEmployee.lastName;
document.getElementById(`txtFifthEmployeeFirstName`).innerHTML =
  fifthEmployee.firstName;
document.getElementById(`txtFifthEmployeeSalary`).innerHTML =
  fifthEmployee.salary;

//Corresponds with 0.j, 0.k, 0.l
products.style.display = `none`;
services.style.display = `none`;
employees.style.display = `none`;

//Corresponds with 5.g, 5.h, 5.i, and 5.j
function productsChoice() {
  products.style.display = `block`;
  services.style.display = `none`;
  employees.style.display = `none`;
}
function servicesChoice() {
  products.style.display = `none`;
  services.style.display = `block`;
  employees.style.display = `none`;
}
function employeesChoice() {
  products.style.display = `none`;
  services.style.display = `none`;
  employees.style.display = `block`;
}
function selectChoice() {
  products.style.display = `none`;
  services.style.display = `none`;
  employees.style.display = `none`;
}

//Corresponds with 5.a, 5.b, 5.f
document.getElementById(`btnDisplayListing`).onclick = function () {
  let choice = document.getElementById(`listing`).value;
  return choice === `select`
    ? selectChoice()
    : choice === `products`
    ? productsChoice()
    : choice === `services`
    ? servicesChoice()
    : choice === `employees`
    ? employeesChoice()
    : alert(`Something went wrong.`);
};
