"use client";

import { useState, useEffect } from "react";
import Card from "./Card";

function CardGrid({
  cards,
  incrementFailedAttempts,
  handleScore,
  handleGameState,
  resetGame,
}) {
  const [flippedCards, setFlippedCards] = useState([]);
  const [matchedCards, setMatchedCards] = useState([]);

  function handleMatchedCards(mCards) {
    setMatchedCards([...matchedCards, ...mCards]);
  }

  function handleFlippedCards(card) {
    if (flippedCards.length >= 2) return;
    if (flippedCards.includes(card) || matchedCards.includes(card)) return;

    setFlippedCards([...flippedCards, card]);
  }

  useEffect(() => {
    if (flippedCards.length === 2) {
      const [firstCard, secondCard] = flippedCards;
      setTimeout(() => {
        if (firstCard.name === secondCard.name) {
          handleMatchedCards(flippedCards);
          handleScore(true);
          setFlippedCards([]);
        } else {
          handleScore(false);
          incrementFailedAttempts();
          setFlippedCards([]);
        }
      }, 500);
    }
  }, [flippedCards]);

  useEffect(() => {
    if (matchedCards.length === cards.length) {
      setTimeout(() => {
        handleGameState("end");
      }, 500);
    }
  }, [matchedCards, cards, handleGameState, resetGame]);

  const cardsList = cards.map((card) => (
    <Card
      key={card.id}
      card={card}
      flippedCards={flippedCards}
      handleFlippedCards={handleFlippedCards}
      matchedCards={matchedCards}
    />
  ));

  return <div className="grid grid-cols-4 gap-6">{cardsList}</div>;
}

export default CardGrid;
