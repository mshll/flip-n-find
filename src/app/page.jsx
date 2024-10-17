'use client';

import Image from 'next/image';
import CardGrid from './components/CardGrid';
import cards from './data/cards';
import * as _ from 'lodash';
import { useState } from 'react';
import StartMenu from './components/StartMenu';

export default function Home() {
  const [gameState, setGameState] = useState('menu');

  const cards2 = cards.map((card) => ({ ...card, id: card.id + '-2' }));
  const cardsArr = _.shuffle([...cards, ...cards2]);

  function handleGameState(state) {
    setGameState(state);
  }

  let comp;
  if (gameState === 'menu') {
    comp = <StartMenu handleGameState={handleGameState} />;
  } else if (gameState === 'game') {
    comp = <CardGrid cards={cardsArr} />;
  }

  return (
    <div className="justify-items-center items-center gap-16 grid grid-rows-[20px_1fr_20px] mx-auto p-8 sm:p-20 pb-20 min-h-screen font-[family-name:var(--font-geist-sans)]">
      <h1 className="font-black text-4xl">Flip n&apos; Find</h1>
      {comp}
    </div>
  );
}
