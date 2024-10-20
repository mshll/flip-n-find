"use client";

import localFont from "next/font/local";
import Image from "next/image";
import * as _ from "lodash";
import { useState } from "react";
import Game from "./components/Game";
import banks from "./data/banks";
import cars from "./data/cars";
import coffeeshops from "./data/coffeshops";

export default function Home() {
  const [gameState, setGameState] = useState("menu");
  const [selectedTheme, setSelectedTheme] = useState("banks");
  const [gameCards, setGameCards] = useState([]);
  let cards;

  switch (selectedTheme) {
    case "banks":
      cards = banks;
      break;
    case "cars":
      cards = cars;
      break;
    case "coffee":
      cards = coffeeshops;
      break;
    default:
      cards = banks;
  }

  cards = _.shuffle(cards);
  const cards2 = cards.map((card) => ({ ...card, id: card.id + "-2" }));
  const cardsArr = _.shuffle([...cards, ...cards2]);

  function handleGameState(state) {
    setGameCards(cardsArr);
    setGameState(state);
  }

  return (
    <>
      <Game
        cards={gameCards}
        setGameCards={setGameCards}
        gameState={gameState}
        handleGameState={handleGameState}
        selectedTheme={selectedTheme}
        setSelectedTheme={setSelectedTheme}
      />
    </>
  );
}
