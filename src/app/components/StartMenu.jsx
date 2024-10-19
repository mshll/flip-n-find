import Button from "./Button";

function StartMenu({ handleGameState }) {
  return (
    <>
      <div className="m-auto flex">
        <Button
          onClick={() => handleGameState("game")}
          className="border-blue-400 bg-blue-300 font-bold text-slate-800"
        >
          Play
        </Button>
      </div>
    </>
  );
}

export default StartMenu;
