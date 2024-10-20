import Button from "./Button";
import ThemePicker from "./ThemePicker";
import Image from "next/image";
import cardShuffle from "../images/cards-shuffle.gif";
import RadioButtons from "./RadioButtons";

function StartMenu({ handleGameState, setSelectedTheme, selectedTheme, gridSize, setGridSize }) {
  return (
    <>
      <div className="mx-auto my-10 flex flex-col gap-10 text-slate-200">
        <Image
          src={cardShuffle}
          alt="Card Shuffle"
          width={150}
          height={150}
          className="mx-auto mb-12"
        />
        <div className="">
          <h6 className="mb-4 text-center text-sm font-semibold tracking-wider">
            Pick a theme
          </h6>
          <ThemePicker
            setSelectedTheme={setSelectedTheme}
            selectedTheme={selectedTheme}
          />
        </div>
        <div className="">

        <h6 className="mb-4 text-center text-sm font-semibold tracking-wider">
          Pick a difficulty
          </h6>
        <RadioButtons options={["Easy", "Medium", "Hard"]} gridSize={gridSize} setGridSize={setGridSize}></RadioButtons>
        </div>
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
