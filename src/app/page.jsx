"use client";

import localFont from "next/font/local";
import Image from "next/image";
import * as _ from "lodash";
import { useState } from "react";
import Game from "./components/Game";
import banks from "./data/banks";
import cars from "./data/cars";
import coffeeshops from "./data/coffeshops";
import flags from "./data/flags";

export default function Home() {
  const [gameState, setGameState] = useState("menu");
  const [selectedTheme, setSelectedTheme] = useState("banks");
  const [gameCards, setGameCards] = useState([]);
  const [gridSize, setGridSize] = useState("Medium");
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
    case "flags":
      cards = flags;
      break;
    default:
      cards = banks;
  }

  let time = new Date();
  const dur = gridSize === "Easy" ? 60 : gridSize === "Medium" ? 90 : 120;
  time.setSeconds(time.getSeconds() + dur);

  function handleGameState(state) {
      cards = _.shuffle(cards);
      const size = gridSize === "Easy" ? 3 : gridSize === "Medium" ? 4 : 5;
      cards = cards.slice(0, size*2);
      const cards2 = cards.map((card) => ({ ...card, id: card.id + "-2" }));
      const cardsArr = _.shuffle([...cards, ...cards2]);
      setGameCards(cardsArr);
      setGameState(state);
      time = new Date();
      time.setSeconds(time.getSeconds() + 60);
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
        time={time}
        gridSize={gridSize}
        setGridSize={setGridSize}
      />
    </>
  );
}
