import { cards } from "../../utils/cardData.js";
import { Card } from "../Card/Card.js";

// Store the cards in a global state

export function CardList() {
  const cardList = document.createElement("section");
  cardList.classList.add("card-list");

  cards.forEach((card) => {
    const cardElement = Card(card);
    cardList.append(cardElement);
  });

  return cardList;
}
