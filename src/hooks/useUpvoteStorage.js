import { useEffect, useState } from "react";

const STORAGE_KEY = "upvote-groups";

export const useUpvoteStorage = () => {
  const [upvoteGroups, setUpvoteGroups] = useState([]);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      setUpvoteGroups(JSON.parse(stored));
    } else {
      setUpvoteGroups([{ selected: false, count: 1 }]);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(upvoteGroups));
  }, [upvoteGroups]);

  return [upvoteGroups, setUpvoteGroups];
};
