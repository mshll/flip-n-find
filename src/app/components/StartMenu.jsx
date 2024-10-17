function StartMenu({ handleGameState }) {
  return (
    <>
      <div className="flex justify-center items-center gap-2 bg-foreground hover:bg-[#383838] dark:hover:bg-[#ccc] px-4 sm:px-5 border border-transparent border-solid rounded-full h-10 sm:h-12 text-background text-sm sm:text-base transition-colors">
        <button onClick={() => handleGameState('game')}>Start Game</button>
      </div>
    </>
  );
}

export default StartMenu;
