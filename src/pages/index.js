import React from "react";
import { UpvoteList } from "@/components/upvoteList";
import { useUpvoteStorage } from "@/hooks/useUpvoteStorage";
import { Header } from "@/components/header";

export default function Home() {
  const [upvoteGroups, setUpvoteGroups] = useUpvoteStorage();

  const addList = () => {
    setUpvoteGroups([...upvoteGroups, { selected: false, count: 1 }]);
  };

  const updateUpvoteGroup = (index, newData) => {
    const newUpvoteGroups = [...upvoteGroups];
    newUpvoteGroups[index] = { ...newUpvoteGroups[index], ...newData };
    setUpvoteGroups(newUpvoteGroups);
  };

  return (
    <>
      <Header />
      <div className="w-screen h-dvh overflow-hidden bg-gray-200">
        <div className="py-10 px-2 size-full flex justify-center items-center">
          <div className="mx-auto min-w-full md:min-w-3xl max-w-3xl size-full flex flex-col items-start justify-center gap-4">
            <button
              onClick={addList}
              className="cursor-pointer px-4 py-2 rounded-md bg-[#F4F6F8] text-[#343A40] hover:bg-[#E5E8FD] transition-all text-sm"
            >
              Add new list
            </button>
            <div className="w-full overflow-auto flex flex-col gap-8 bg-white p-3 md:p-10 rounded-xl shadow-lg">
              {upvoteGroups.map((group, i) => (
                <UpvoteList
                  key={i}
                  selected={group.selected}
                  count={group.count}
                  onToggle={() =>
                    updateUpvoteGroup(i, { selected: !group.selected })
                  }
                  onAdd={() => updateUpvoteGroup(i, { count: group.count + 1 })}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
