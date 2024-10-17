'use client';
import { useState } from 'react';
import CardGrid from './CardGrid';
import StartMenu from './StartMenu';

function Game({ cards, gameState, handleGameState }) {
  const [failedAttempts, setFailedAttempts] = useState(0);

  function incrementFailedAttempts() {
    setFailedAttempts(failedAttempts + 1);
  }

  let gameComponent = <div>ERROR</div>;

  if (gameState === 'menu') {
    gameComponent = <StartMenu handleGameState={handleGameState} />;
  } else if (gameState === 'game') {
    gameComponent = (
      <>
        <div className="flex justify-center items-center mx-auto"></div>
        <p className="">Failed Attempts: {failedAttempts}</p>
        <CardGrid cards={cards} incrementFailedAttempts={incrementFailedAttempts} />
      </>
    );
  }

  return <>{gameComponent}</>;
}

export default Game;
