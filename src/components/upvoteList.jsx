import React from "react";
import { Upvote } from "@/components/upvote";
import { Plus } from "@/components/icons/plus";

export const UpvoteList = ({ selected, count, onToggle, onAdd }) => {
  return (
    <div className="w-full flex items-center gap-4">
      <div className="w-full p-3 md:p-4 border-2 border-gray-300 rounded-xl overflow-hidden">
        <div className="w-full overflow-auto flex gap-4">
          {Array.from({ length: count }).map((_, idx) => (
            <Upvote key={idx} selected={selected} onClick={onToggle} />
          ))}
        </div>
      </div>

      <Plus onClick={onAdd} />
    </div>
  );
};
