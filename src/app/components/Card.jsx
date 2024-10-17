function Card({ card }) {
  return (
    <>
      <div className="bg-blue-300 px-10 py-20 text-center text-slate-800">{card.name}</div>
    </>
  );
}

export default Card;
