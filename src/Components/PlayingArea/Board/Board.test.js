import React from "react";
import { render } from "@testing-library/react";
import Board from "./Board";

describe("Board component", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = render(<Board />);
  });

  it("should display 8 lines on the board", () => {
    const board = wrapper.getByTestId("board");

    expect(board.children).toHaveLength(8);
  });

  it("should display 8 squares on a line", () => {
    const line = wrapper.getByTestId("line-0");
    const line2 = wrapper.getByTestId("line-1");
    expect(line.children[0].children).toHaveLength(8);
    expect(line2.children[0].children).toHaveLength(8);
  });

  it("should display a square containing a black chip on line 3 column 3", () => {
    const square = wrapper.getByTestId("square-l3c3");

    expect(square).toHaveClass("contains-black-chip");
  });

  it("should display a square containing a black chip on line 4 column 4", () => {
    const square = wrapper.getByTestId("square-l4c4");

    expect(square).toHaveClass("contains-black-chip");
  });

  it("should display a square containing a white chip on line 3 column 4", () => {
    const square = wrapper.getByTestId("square-l3c4");

    expect(square).toHaveClass("contains-white-chip");
  });

  it("should display a square containing a white chip on line 4 column 3", () => {
    const square = wrapper.getByTestId("square-l4c3");

    expect(square).toHaveClass("contains-white-chip");
  });
});
