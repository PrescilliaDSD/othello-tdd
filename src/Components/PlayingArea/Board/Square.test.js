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
      squareLineIndex: 3,
      squareColumnIndex: 4,
      type: "white",
      addChipOnTheBoard: jest.fn(),
    };

    wrapper = render(
      <DndProvider backend={Backend}>
        <Square {...props} />
      </DndProvider>
    );
  });

  it("should not be possible to click on a square that contains a white chip", () => {
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
        <Square
          {...props}
          squareLineIndex={3}
          squareColumnIndex={3}
          type="black"
        />
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
