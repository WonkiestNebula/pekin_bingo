import { useState } from "react";

/* eslint-disable react/prop-types */
const BingoCell = ({ label, rounded }) => {
  const [isMarked, setIsMarked] = useState(false);

  if (isMarked) {
    return (
      <div
        className={`flex w-1/5 cursor-pointer select-none items-center justify-center text-balance
                    ${rounded ?? ""} border border-green-600 bg-green-500 p-2
                    font-sans text-xs text-slate-800 hover:bg-green-400 hover:text-slate-900 md:text-lg`}
        onClick={() => setIsMarked(false)}
      >
        <span className="text-center">{label}</span>
      </div>
    );
  }
  return (
    <div
      className={`flex w-1/5 cursor-pointer select-none items-center justify-center
                  text-balance border border-slate-200 bg-slate-800 p-2 font-sans
                  text-xs text-white hover:bg-slate-700 hover:text-green-200 md:text-lg
                  ${rounded ?? ""}`}
      onClick={() => setIsMarked(true)}
    >
      <span className="select-none text-center">{label}</span>
    </div>
  );
};

export default BingoCell;
