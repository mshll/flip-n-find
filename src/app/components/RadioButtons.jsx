import { useState } from 'react';

const RadioButtons = ({options, gridSize, setGridSize}) => {


  return (
    <div className="relative flex flex-wrap rounded-lg bg-slate-200 shadow-[0_0_0_1px_rgba(0,0,0,0.06)] p-1 w-[300px] text-sm">
      {options.map((option) => (
        <label key={option} className="flex-auto text-center">
          <input
            type="radio"
            name="radio"
            value={option}
            checked={gridSize === option}
            onChange={(e) => setGridSize(e.target.value)}
            className="peer hidden"
          />
          <span className="flex cursor-pointer items-center justify-center rounded-lg py-2 text-slate-700 transition-all duration-150 ease-in-out peer-checked:bg-blue-300 peer-checked:font-semibold peer-checked:text-slate-200">
            {option}
          </span>
        </label>
      ))}
    </div>
  );
};

export default RadioButtons;