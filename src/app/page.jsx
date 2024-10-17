'use client';

import Image from 'next/image';
import cards from './data/cards';
import * as _ from 'lodash';
import { useState } from 'react';
import Game from './components/Game';

export default function Home() {
  const [gameState, setGameState] = useState('menu');

  const cards2 = cards.map((card) => ({ ...card, id: card.id + '-2' }));
  const cardsArr = _.shuffle([...cards, ...cards2]);

  function handleGameState(state) {
    setGameState(state);
  }

  return (
    <div className="flex flex-col justify-center justify-items-center items-center gap-6 mx-auto p-8 sm:p-20 pb-20 min-h-screen font-[family-name:var(--font-geist-sans)]">
      <h1 className="font-black text-4xl">Flip n&apos; Find</h1>
      <Game cards={cardsArr} gameState={gameState} handleGameState={handleGameState} />
    </div>
  );
}
