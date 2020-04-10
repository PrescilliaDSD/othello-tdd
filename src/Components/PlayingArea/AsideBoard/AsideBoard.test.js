import React from "react";
import { render } from "@testing-library/react";
import { DndProvider } from "react-dnd";
import Backend from "react-dnd-html5-backend";
import AsideBoard from "./AsideBoard";

describe("AsideBoard component", () => {
  let wrapper;

  beforeEach(() => {
    const identity = (el) => el;
    wrapper = render(
      <DndProvider backend={Backend}>
        <AsideBoard connectDragSource={identity} currentPlayer="black" />
      </DndProvider>
    );
  });

  it("should display a black chip", () => {
    const chip = wrapper.getByTestId("aside-chip");
    expect(chip).toHaveClass("black-chip");
  });

  it("should display a pass button", () => {
    const button = wrapper.getByTestId("pass-button");
    expect(button).toHaveTextContent(/passez/);
  });
});
