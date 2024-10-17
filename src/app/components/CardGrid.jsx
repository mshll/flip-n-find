'use client';

import { useState } from 'react';
import Card from './Card';

function CardGrid({ cards, incrementFailedAttempts }) {
  const [flippedCards, setFlippedCards] = useState([]);
  const [foundCards, setFoundCards] = useState([]);

  function handleFoundCards(cards) {
    setFoundCards([...foundCards, ...cards]);
  }

  function handleFlippedCards(card) {
    if (flippedCards.includes(card)) return;

    setFlippedCards([...flippedCards, card]);

    if (flippedCards.length === 2) {
      if (flippedCards[0].name === flippedCards[1].name) {
        handleFoundCards([...flippedCards]);
      } else {
        incrementFailedAttempts();
      }
      setFlippedCards([card]);
    }
  }

  const cardsList = cards.map((card) => (
    <>
      <Card key={card.id} card={card} flippedCards={flippedCards} handleFlippedCards={handleFlippedCards} foundCards={foundCards} />
    </>
  ));

  return (
    <>
      <div className="gap-6 grid grid-cols-4">{cardsList}</div>
    </>
  );
}

export default CardGrid;
