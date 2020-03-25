import React from "react";
import { render, getByTestId } from "@testing-library/react";
import Chip from "./Chip";

describe("Chip component", () => {
  let props;
  let wrapper;

  it("should display a black chip if given 'black' as color", () => {
    props = {
      color: "black"
    };
    wrapper = render(<Chip {...props} />);

    const chip = wrapper.getByTestId("chip");

    expect(chip).toHaveClass("black-chip");
  });

  it("should display a white chip if given 'white' as color", () => {
    props = {
      color: "white"
    };
    wrapper = render(<Chip {...props} />);

    const chip = wrapper.getByTestId("chip");

    expect(chip).toHaveClass("white-chip");
  });

  it("should display an empty chip if given 'empty' as color", () => {
    props = {
      color: "empty"
    };
    wrapper = render(<Chip {...props} />);

    const chip = wrapper.getByTestId("chip");

    expect(chip).toHaveClass("empty-chip");
  });
});
