import React from "react";
import { Arrow } from "@/components/icons/arrow";
import classnames from "classnames";

export const Upvote = ({ selected, onClick }) => {
  return (
    <button
      className={classnames(
        "cursor-pointer min-w-12 max-w-12 md:min-w-16 md:max-w-16 aspect-square rounded-xl p-3 md:p-4",
        selected ? "bg-[#E5E8FD]" : "bg-[#F4F6F8]",
      )}
      onClick={onClick}
    >
      <Arrow color={selected ? "fill-[#253CF2]" : "fill-[#343A40]"} />
    </button>
  );
};
