"use client";
import { useState } from "react";
import CardGrid from "./CardGrid";
import StartMenu from "./StartMenu";
import Button from "./Button";
import useWindowSize from "react-use/lib/useWindowSize";
import Confetti from "react-confetti";
import Image from "next/image";
import logo from "../images/fnf-logo.png";
import logo2 from "../images/fnf-logo-2.png";
import * as _ from "lodash";
import Stopwatch from "./Stopwatch";

function Game({
  cards,
  setGameCards,
  gameState,
  handleGameState,
  selectedTheme,
  setSelectedTheme,
}) {
  const { width, height } = useWindowSize();
  const [score, setScore] = useState(0);
  const [failedAttempts, setFailedAttempts] = useState(0);
  const [logoHovered, setLogoHovered] = useState(false);
  const [isFailed, setIsFailed] = useState(false);

  function incrementFailedAttempts() {
    setFailedAttempts(failedAttempts + 1);
  }

  function handleScore(inc) {
    if (inc) setScore(score + 10);
    else if (score >= 2) setScore(score - 2);
  }

  function resetGame() {
    setScore(0);
    setFailedAttempts(0);
    setGameCards(_.shuffle([...cards]));
  }

  function handleGameOver(state, isFailed = false) {
    setIsFailed(isFailed);
    handleGameState(state);
    resetGame();
  }

  let gameComponent = <div>ERROR - GS: {gameState}</div>;

  if (gameState === "menu")
    gameComponent = (
      <StartMenu
        handleGameState={handleGameState}
        setSelectedTheme={setSelectedTheme}
        selectedTheme={selectedTheme}
      />
    );

  if (gameState === "game")
    gameComponent = (
      <>
        <div className="m-auto flex flex-col items-center justify-between gap-6">
          <div className="mx-auto flex w-full items-center justify-between">
            <div className="flex items-center text-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1.2em"
                height="1.2em"
                viewBox="0 0 512 512"
              >
                <path
                  fill="currentColor"
                  d="M256 38.013c-22.458 0-66.472 110.3-84.64 123.502c-18.17 13.2-136.674 20.975-143.614 42.334c-6.94 21.358 84.362 97.303 91.302 118.662s-22.286 136.465-4.116 149.665S233.542 422.012 256 422.012s122.9 63.365 141.068 50.164c18.17-13.2-11.056-128.306-4.116-149.665c6.94-21.36 98.242-97.304 91.302-118.663c-6.94-21.36-125.444-29.134-143.613-42.335c-18.168-13.2-62.182-123.502-84.64-123.502z"
                />
              </svg>
              <p className="ms-2 text-xl font-black"> {score}</p>
            </div>
            <Stopwatch
              className={`font-mono text-xl font-bold`}
              limit={"00:01:00"}
              onCallback={() => handleGameOver("end", true)}
            />
            <button
              className="flex items-center text-lg transition-all duration-300 ease-in-out hover:rotate-90"
              onClick={() => handleGameOver("game")}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1.2em"
                height="1.2em"
                viewBox="0 0 24 24"
              >
                <g
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2.5"
                >
                  <path d="M12 3a9 9 0 1 1-5.657 2" />
                  <path d="M3 4.5h4v4" />
                </g>
              </svg>
            </button>
            <div className="flex items-center text-lg">
              <p className="me-2 text-xl font-black"> {failedAttempts}</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 16 16"
              >
                <path
                  fill="currentColor"
                  d="M15.854 12.854L11 8l4.854-4.854a.503.503 0 0 0 0-.707L13.561.146a.5.5 0 0 0-.707 0L8 5L3.146.146a.5.5 0 0 0-.707 0L.146 2.439a.5.5 0 0 0 0 .707L5 8L.146 12.854a.5.5 0 0 0 0 .707l2.293 2.293a.5.5 0 0 0 .707 0L8 11l4.854 4.854a.5.5 0 0 0 .707 0l2.293-2.293a.5.5 0 0 0 0-.707"
                />
              </svg>
            </div>
          </div>
          <CardGrid
            key="card-grid"
            cards={cards}
            incrementFailedAttempts={incrementFailedAttempts}
            handleScore={handleScore}
            handleGameState={handleGameState}
            resetGame={resetGame}
          />
        </div>
      </>
    );

  const spanClass = "font-black text-blue-300";
  if (gameState === "end")
    gameComponent = (
      <div className="m-auto flex flex-col items-center justify-center gap-6 font-medium">
        {isFailed ? (
          <>
            <h1 className="text-4xl font-black">Game Over! 😢</h1>
            <p className="text-lg tracking-widest">
              You tried your best, but time is over
            </p>
          </>
        ) : (
          <>
            <h1 className="text-4xl font-black">Congratulations! 🎉</h1>
            <p className="text-lg tracking-widest">
              You scored <span className={spanClass}>{score}</span> points
              <br />
              with <span className={spanClass}>{failedAttempts}</span> mistakes.
            </p>
            <Confetti
              width={width}
              height={height}
              numberOfPieces={300}
              confettiSource={{ x: 0, y: height, w: width, h: 0 }}
              initialVelocityY={30}
              gravity={0.2}
              recycle={false}
            />
          </>
        )}
        <div className="flex gap-6">
          <Button
            onClick={() => handleGameOver("game")}
            className="mt-10 border-blue-400 bg-blue-300 font-bold text-slate-800"
          >
            Play Again
          </Button>
          <Button
            onClick={() => handleGameOver("menu")}
            className="mt-10 border-blue-400 bg-blue-300 font-bold text-slate-800"
          >
            Main Menu
          </Button>
        </div>
      </div>
    );

  return (
    <>
      <div className="mx-auto flex min-h-screen flex-col items-center justify-between justify-items-center gap-6 p-10 pb-4 text-center font-[family-name:var(--font-geist-sans)]">
        <a href="/" className="mt-6">
          <Image
            src={logoHovered ? logo2 : logo}
            alt="Flip n' Find"
            width={`${gameState === "game" ? "150" : "300"}`}
            height={200}
            className="transition-all duration-500 ease-in-out"
            onMouseEnter={() => setLogoHovered(true)}
            onMouseLeave={() => setLogoHovered(false)}
          />
        </a>
        {gameComponent}
        <p
          className={`mt-10 cursor-default text-xs font-semibold tracking-widest text-slate-200 transition-all duration-300 ease-in-out hover:[letter-spacing:3px]`}
        >
          A game by <span className="font-bold">Meshal</span> &{" "}
          <span className="font-bold">Saja</span>.
        </p>
      </div>
    </>
  );
}

export default Game;
