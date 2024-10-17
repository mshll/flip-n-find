import Card from './Card';
import cards from '../data/cards';

// src: https://stackoverflow.com/a/2450976
function shuffle(array) {
  let currentIndex = array.length;

  // While there remain elements to shuffle...
  while (currentIndex != 0) {
    // Pick a remaining element...
    let randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
  }
}

function CardGrid() {
  const cardsArr = [...cards, ...cards];
  shuffle(cardsArr);
  const cardsList = cardsArr.map((card) => <Card key={card.id} card={card} />);

  return (
    <>
      <div className="gap-6 grid grid-cols-4">{cardsList}</div>
    </>
  );
}

export default CardGrid;
