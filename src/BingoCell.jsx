import { useState } from "react";

/* eslint-disable react/prop-types */
const BingoCell = ({ label }) => {
  const [isMarked, setIsMarked] = useState(false);

  if (isMarked) {
    return (
      <div
        className="flex w-1/5 cursor-pointer items-center justify-center border border-green-600 bg-green-500 text-slate-800 hover:bg-green-400 hover:text-slate-900"
        onClick={() => setIsMarked(false)}
      >
        <span className="text-center">{label ?? "NOTHING HERE YET"}</span>
      </div>
    );
  }
  return (
    <div
      className="flex w-1/5 cursor-pointer items-center justify-center border border-slate-200 bg-slate-800 text-pink-100 hover:bg-slate-700 hover:text-pink-200"
      onClick={() => setIsMarked(true)}
    >
      <span className="text-center">{label ?? "NOTHING HERE YET"}</span>
    </div>
  );
};

export default BingoCell;
