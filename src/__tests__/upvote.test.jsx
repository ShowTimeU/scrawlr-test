import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { Upvote } from "@/components/upvote";

describe("Upvote", () => {
  it("toggles selection on click", () => {
    const handleClick = jest.fn();

    render(<Upvote selected={false} onClick={handleClick} />);

    const button = screen.getByRole("button");
    fireEvent.click(button);

    expect(handleClick).toHaveBeenCalled();
  });
});
