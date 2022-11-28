/* 
Title: Web 231 Assign_6.doxs
Author: Richard Krasso
Date: 11/27/2022
Description: The instructions for Assignment 6 – In-N-Out-Books
*/
/*
Title: prop_html_innerhtml.asp (https://www.w3schools.com/jsref/prop_html_innerhtml.asp) 
Author: w3schools.com
Date: 11/27/2022
Description: An article using code snippets to explain how to use innerHTML
*/

//Corresponds with exhibit 0.a
const firstBook = {
  isbn: `0261103571`,
  title: `The Fellowship Of The Ring`,
  pages: `432`,
};
const secondBook = {
  isbn: `1514297272`,
  title: `The Two Towers`,
  pages: `322`,
};
const thirdBook = {
  isbn: `1514298139`,
  title: `Return Of The King`,
  pages: `432`,
};

//Corresponds with exhibit 0.b
const firstAuthor = {
  name: `John Ronald Reuel Tolkien`,
  genre: `Fantasy`,
};
const secondAuthor = {
  name: `Franklin Patrick Herbert Jr.`,
  genre: `Science Fiction`,
};
const thirdAuthor = {
  name: `Clive Staples Lewis`,
  genre: `Fantasy, Science Fiction, Children's Literature`,
};

//Corresponds with exhibits 0.c and 0.d
let books = document.getElementById(`favorite-books`);
let authors = document.getElementById(`favorite-authors`);

//Corresponds with exhibits 0.e and 0.f
books.style.display = `none`;
authors.style.display = `none`;

//Corresponds with exhibit 5.c
document.getElementById(`txtTheFellowshipOfTheRingISBN`).innerHTML =
  firstBook.isbn;
document.getElementById(`txtTheFellowshipOfTheRingTitle`).innerHTML =
  firstBook.title;
document.getElementById(`txtTheFellowshipOfTheRingPages`).innerHTML =
  firstBook.pages;

document.getElementById(`txtTheTwoTowersISBN`).innerHTML = secondBook.isbn;
document.getElementById(`txtTheTwoTowersTitle`).innerHTML = secondBook.title;
document.getElementById(`txtTheTwoTowersPages`).innerHTML = secondBook.pages;

document.getElementById(`txtReturnOfTheKingISBN`).innerHTML = thirdBook.isbn;
document.getElementById(`txtReturnOfTheKingTitle`).innerHTML = thirdBook.title;
document.getElementById(`txtReturnOfTheKingPages`).innerHTML = thirdBook.pages;

//Corresponds with exhibit 5.d
document.getElementById(`txtFirstAuthorName`).innerHTML = firstAuthor.name;
document.getElementById(`txtFirstAuthorGenre`).innerHTML = firstAuthor.genre;

document.getElementById(`txtSecondAuthorName`).innerHTML = secondAuthor.name;
document.getElementById(`txtSecondAuthorGenre`).innerHTML = secondAuthor.genre;

document.getElementById(`txtThirdAuthorName`).innerHTML = thirdAuthor.name;
document.getElementById(`txtThirdAuthorGenre`).innerHTML = thirdAuthor.genre;

//Corresponds with exhibit 5.a
document.getElementById(`btnDisplayListing`).onclick = function () {
  //Corresponds with exhibit 5.b
  let choice = document.getElementById(`favoriteList`).value;

  //Corresponds with exhibit 5.f
  function booksChoice() {
    books.style.display = `block`;
    authors.style.display = `none`;
  }

  //Corresponds with exhibit 5.g
  function authorChoice() {
    books.style.display = `none`;
    authors.style.display = `block`;
  }

  //Corresponds with exhibit 5.h
  function selectChoice() {
    books.style.display = `none`;
    authors.style.display = `none`;
  }

  // Corresponds with exhibit 5.e
  // Also corresponds with exhibits 5.f, 5.g, and 5.h by calling the three functions above
  // I was originally supposed to use if…else if…else if…else, but I was given permission to use ternary operators
  return choice === "select"
    ? selectChoice()
    : choice === "books"
    ? booksChoice()
    : choice === "authors"
    ? authorChoice()
    : alert(`Something went wrong.`);
};
