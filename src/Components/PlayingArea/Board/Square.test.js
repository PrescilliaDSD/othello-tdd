import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { DndProvider } from "react-dnd";
import Backend from "react-dnd-html5-backend";
import Square from "./Square";

describe("Square component", () => {
  let props;
  let wrapper;

  beforeEach(() => {
    const identity = (el) => el;

    props = {
      connectDragSource: identity,
      currentPlayer: "black",
      setCurrentPlayer: jest.fn(),
      board: [
        [
          "empty",
          "empty",
          "empty",
          "empty",
          "empty",
          "empty",
          "empty",
          "empty",
        ],
        [
          "empty",
          "empty",
          "empty",
          "empty",
          "empty",
          "empty",
          "empty",
          "empty",
        ],
        [
          "empty",
          "empty",
          "empty",
          "empty",
          "available",
          "empty",
          "empty",
          "empty",
        ],
        [
          "empty",
          "empty",
          "empty",
          "black",
          "white",
          "available",
          "empty",
          "empty",
        ],
        [
          "empty",
          "empty",
          "available",
          "white",
          "black",
          "empty",
          "empty",
          "empty",
        ],
        [
          "empty",
          "empty",
          "empty",
          "available",
          "empty",
          "empty",
          "empty",
          "empty",
        ],
        [
          "empty",
          "empty",
          "empty",
          "empty",
          "empty",
          "empty",
          "empty",
          "empty",
        ],
        [
          "empty",
          "empty",
          "empty",
          "empty",
          "empty",
          "empty",
          "empty",
          "empty",
        ],
      ],
      setBoard: jest.fn(),
      l: 3,
      c: 4,
      type: "white",
    };

    wrapper = render(
      <DndProvider backend={Backend}>
        <Square {...props} />
      </DndProvider>
    );
  });

  it("should not be possible to click on a square who contains a white chip", () => {
    const square = wrapper.getByTestId("square-l3c4");

    expect(square.children[0]).toHaveClass("white-chip");

    fireEvent(
      square,
      new MouseEvent("click", {
        bubbles: true,
        cancelable: true,
      })
    );

    expect(square.children[0]).toHaveClass("white-chip");
  });

  it("should not be possible to click on a square who contains a black chip", () => {
    wrapper.unmount();

    wrapper = render(
      <DndProvider backend={Backend}>
        <Square {...props} l={3} c={3} type="black" currentPlayer="white" />
      </DndProvider>
    );

    const square = wrapper.getByTestId("square-l3c3");

    expect(square.children[0]).toHaveClass("black-chip");

    fireEvent(
      square,
      new MouseEvent("click", {
        bubbles: true,
        cancelable: true,
      })
    );

    expect(square.children[0]).toHaveClass("black-chip");
  });
});
