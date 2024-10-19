import Image from "next/image";

function Card({ card, flippedCards, handleFlippedCards, matchedCards }) {
  const isFlipped = flippedCards.includes(card) || matchedCards.includes(card);

  const handleClick = () => {
    if (matchedCards.includes(card)) return;
    handleFlippedCards(card);
  };

  let cardFaceClasses =
    "absolute inset-0 flex h-full w-full items-center justify-center rounded-lg text-center text-slate-800";
  let cardPointer = matchedCards.includes(card)
    ? "pointer-events-none"
    : "cursor-pointer";

  return (
    <div
      className={`group h-[150px] w-[150px] transition-opacity duration-1000 [perspective:1000px] ${matchedCards.includes(card) ? "opacity-80" : ""}`}
    >
      <div
        className={`relative h-full w-full rounded-lg font-bold shadow-xl transition-transform duration-500 [transform-style:preserve-3d] ${
          isFlipped ? "[transform:rotateY(180deg)]" : ""
        } ${cardPointer}`}
        onClick={handleClick}
      >
        {/* Front Face */}
        <div
          className={`bg-blue-300 text-4xl font-medium text-slate-800/[.2] [backface-visibility:hidden] ${cardFaceClasses}`}
        >
          ?
        </div>
        {/* Back Face */}
        <div
          className={`text-xl transition-colors duration-500 [backface-visibility:hidden] [transform:rotateY(180deg)] ${cardFaceClasses} bg-slate-200`}
        >
          <Image src={card.image} alt={card.name} width={100} height={100} />
        </div>
      </div>
    </div>
  );
}

export default Card;
