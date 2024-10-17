function Card({ card, flippedCards, handleFlippedCards, foundCards }) {
  if (foundCards.includes(card)) return <div className="w-[150px] h-[150px]"></div>;
  return (
    <>
      <div
        className="flex flex-wrap justify-center items-center bg-blue-300 mx-auto w-[150px] h-[150px] text-center text-slate-800 rounded-lg cursor-pointer"
        onClick={() => handleFlippedCards(card)}
      >
        <div className="">{flippedCards.includes(card) ? card.name : '?'}</div>
      </div>
    </>
  );
}

export default Card;
