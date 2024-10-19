"use client";

import localFont from "next/font/local";
import Image from "next/image";
import cards from "./data/cards";
import * as _ from "lodash";
import { useState } from "react";
import Game from "./components/Game";

const rammettoOne = localFont({
  src: "./fonts/RammettoOne.ttf",
  variable: "--font-rammetto-one",
  weight: "100 900",
});

export default function Home() {
  const [gameState, setGameState] = useState("menu");

  const cards2 = cards.map((card) => ({ ...card, id: card.id + "-2" }));
  const cardsArr = _.shuffle([...cards, ...cards2]);

  function handleGameState(state) {
    setGameState(state);
  }

  return (
    <div className="mx-auto flex min-h-screen flex-col items-center justify-center justify-items-center gap-6 p-10 pb-4 font-[family-name:var(--font-geist-sans)]">
      <a
        href="/"
        className={`${rammettoOne.className} ${gameState === "game" ? "text-3xl" : "text-6xl"} mt-10 transition-all duration-500 ease-in-out`}
      >
        Flip n&apos; Find
      </a>
      <Game
        cards={cardsArr}
        gameState={gameState}
        handleGameState={handleGameState}
      />
      <p
        className={`mt-10 text-xs font-semibold tracking-widest text-slate-200`}
      >
        A game by <span className="font-bold">Meshal</span> &{" "}
        <span className="font-bold">Saja</span>.
      </p>
    </div>
  );
}
