import * as React from "react";

export const SizeButton = ({ size, isSelected, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`px-3 rounded-lg ${
        isSelected ? "bg-neutral-400" : "bg-zinc-100"
      } h-[53px] w-[53px] text-3xl text-black flex items-center justify-center`}
      aria-pressed={isSelected}
    >
      {size}
    </button>
  );
};