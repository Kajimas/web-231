/*
Title: Web 231 Assign_9.doxs
Author: Richard Krasso
Date: 12/18/2022
Description: The instructions for Assignment 9.2 – Final: Card Game
*/
/*
Title: Material Design Icons (https://pictogrammers.github.io/@mdi/font/6.9.96/)
Author: (Not Applicable)
Date: 12/18/2022
Description: A library of icons used in Google applications, free for public use 
*/

// This block corresponds with part "a." of the first "Additional JavaScript Requirements"
// The "Card" class is created with a constructor with the parameters of "face" and "suit"
class Card {
  constructor(face, suit) {
    this.face = face;
    this.suit = suit;
  }
}

// This block corresponds with part "b." of the first "Additional JavaScript Requirements"
// The "Dealer" class is created with a constructor with no parameters
// This block also corresponds with numbers "1)" through "8)" of the second "Additional JavaScript Requirements"
class Dealer {
  //CARD_COUNT is used later within both of Dealer's functions
  CARD_COUNT = 52;

  //The cards[] array is populated and reordered later with getDeckOfCards() and shuffle(), respectively
  cards = [];

  //The faces[] and suits[] arrays will only be used in getDeckOfCards()
  faces = [`A`, `2`, `3`, `4`, `5`, `6`, `7`, `8`, `9`, `10`, `J`, `Q`, `K`];
  suits = [`Hearts`, `Diamonds`, `Clubs`, `Spades`];

  constructor() {
    this.getDeckOfCards();
  }

  //This function populates the cards[] array with 52 unique cards in order
  getDeckOfCards() {
    for (let count = 0; count < this.CARD_COUNT; count++) {
      this.cards[count] = new Card(
        this.faces[count % 13],
        this.suits[Math.floor(count / 13)]
      );
    }
  }

  //This function reorders the elements in the cards[] array
  //I am not certain that I followed the instructions exactly, but it does randomly shuffle each element with no extras and none missing
  shuffle() {
    for (let count = 0; count < this.CARD_COUNT; count++) {
      let secondCard = Math.floor(Math.random() * this.CARD_COUNT);
      let firstCard = count;
      let tempCard = this.cards[firstCard];
      this.cards[firstCard] = this.cards[secondCard];
      this.cards[secondCard] = tempCard;
    }
  }

  //This function creates a div for each element of cards[]
  //The accepted parameters are needed for applying each elements' faces, suits, and colors
  buildPlayingCard(card, suitIcon, faceColor, suitColor) {
    return `<div class="card player-card"><div class="card-title" style="text-align: left; font-size: 20px; padding-left: 10px; color: ${faceColor}">${card.face}</div><div class="card-content" style="font-size: 28px; padding-bottom: 25px;"><span class="${suitIcon}" style="color: ${suitColor}"></span></div></div>`;
  }
}

// This block corresponds with "a." through "k." of the third "Additional JavaScript Requirements"
// The onclick event corresponds with "a."
document.getElementById(`btnDealCards`).onclick = function () {
  // This block corresponds with "b.", "c", and "e"
  // "d." was a typo and was skipped
  let dealer = new Dealer();
  dealer.shuffle();
  let cardOutputWithIcon = ``;

  //This for loop and its switch case statements corresponds with "f." through "j."
  for (const card of dealer.cards) {
    switch (card.suit) {
      case `Hearts`:
        cardOutputWithIcon += dealer.buildPlayingCard(
          card,
          `mdi mdi-cards-heart`,
          `red`,
          `red`
        );
        break;
      case `Diamonds`:
        cardOutputWithIcon += dealer.buildPlayingCard(
          card,
          `mdi mdi-cards-diamond`,
          `red`,
          `red`
        );
        break;
      case `Clubs`:
        cardOutputWithIcon += dealer.buildPlayingCard(
          card,
          `mdi mdi-cards-club`,
          `black`,
          `black`
        );
        break;
      case `Spades`:
        cardOutputWithIcon += dealer.buildPlayingCard(
          card,
          `mdi mdi-cards-spade`,
          `black`,
          `black`
        );
        break;
    }
  }
  //This document.getElementByID().innerHTML corresponds with "k."
  document.getElementById(`player-card-container`).innerHTML =
    cardOutputWithIcon;
};
