import React from "react";

export const Plus = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="cursor-pointer size-12 md:size-16 rounded-xl bg-[#F4F6F8] hover:bg-[#E5E8FD] transition-all p-3 md:p-4"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 448 512"
        className="size-full fill-[#343A40]"
      >
        <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 144L48 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0 0 144c0 17.7 14.3 32 32 32s32-14.3 32-32l0-144 144 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-144 0 0-144z" />
      </svg>
    </button>
  );
};
