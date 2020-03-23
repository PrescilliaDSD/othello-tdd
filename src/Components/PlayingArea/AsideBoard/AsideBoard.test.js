import React from "react";
import { render } from "@testing-library/react";
import AsideBoard from "./AsideBoard";

describe("AsideBoard component", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = render(<AsideBoard />);
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
