import React from "react";
import { render, getByTestId } from "@testing-library/react";
import Chip from "./Chip";

describe("Chip component", () => {
  let props;
  let wrapper;

  it("should display a black chip if given 'contains-black-chip'", () => {
    props = {
      color: "contains-black-chip"
    };
    wrapper = render(<Chip {...props} />);

    const chip = getByTestId("chip");

    expect(chip).toHaveClass("black-chip");
  });
});
