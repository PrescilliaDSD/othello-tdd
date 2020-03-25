import React from "react";
import { render, fireEvent } from "@testing-library/react";
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

  it("should display a square with no chip on line 1 column 1", () => {
    const square = wrapper.getByTestId("square-l1c1");

    expect(square).toHaveClass("contains-empty-chip");
  });

  it("should display a black chip if click on square line 2 column 4", () => {
    const square = wrapper.getByTestId("square-l2c4");
    fireEvent(
      square,
      new MouseEvent("click", {
        bubbles: true,
        cancelable: true
      })
    );
    expect(square.children[0]).toHaveClass("black-chip");
  });

  it("should display a white chip on 2nd square clicked", () => {
    const square1 = wrapper.getByTestId("square-l2c4");
    fireEvent(
      square1,
      new MouseEvent("click", {
        bubbles: true,
        cancelable: true
      })
    );
    expect(square1.children[0]).toHaveClass("black-chip");

    const square2 = wrapper.getByTestId("square-l4c5");
    fireEvent(
      square2,
      new MouseEvent("click", {
        bubbles: true,
        cancelable: true
      })
    );
    expect(square2.children[0]).toHaveClass("white-chip");
  });
});
