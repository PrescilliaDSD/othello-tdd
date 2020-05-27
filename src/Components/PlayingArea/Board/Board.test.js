import React from "react";
import { render, fireEvent, act } from "../../../utils/test-utils";
import Board from "./Board";

describe("Board component", () => {
  describe("board initialization", () => {
    let props;
    let wrapper;

    beforeEach(async () => {
      props = {
        currentPlayer: "black",
        setCurrentPlayer: jest.fn(),
        opponent: "white",
        setOpponent: jest.fn(),
      };

      await act(async () => {
        wrapper = render(<Board {...props} />);
      });
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

  describe("rules for available chips", () => {
    describe("on black player's turn", () => {
      let props;
      let wrapper;

      beforeEach(async () => {
        props = {
          currentPlayer: "black",
          setCurrentPlayer: jest.fn(),
          opponent: "white",
          setOpponent: jest.fn(),
        };

        await act(async () => {
          wrapper = render(<Board {...props} />);
        });
      });

      it("should be available if there is a white chip on the square below and a black chip two squares below", () => {
        const square = wrapper.getByTestId("square-l2c4");
        expect(square).toHaveClass("contains-available-chip");
      });

      it("should be available if there is 2 white chips below and a black chip three squares below", async () => {
        fireEvent(
          wrapper.getByTestId("square-l5c3"),
          new MouseEvent("click", {
            bubbles: true,
            cancelable: true,
          })
        );

        await act(async () => {
          wrapper.rerender(
            <Board {...props} currentPlayer="white" opponent="black" />
          );
        });

        fireEvent(
          wrapper.getByTestId("square-l5c4"),
          new MouseEvent("click", {
            bubbles: true,
            cancelable: true,
          })
        );

        await act(async () => {
          wrapper.rerender(
            <Board {...props} currentPlayer="black" opponent="white" />
          );
        });

        fireEvent(
          wrapper.getByTestId("square-l5c5"),
          new MouseEvent("click", {
            bubbles: true,
            cancelable: true,
          })
        );

        await act(async () => {
          wrapper.rerender(
            <Board {...props} currentPlayer="white" opponent="black" />
          );
        });

        fireEvent(
          wrapper.getByTestId("square-l3c2"),
          new MouseEvent("click", {
            bubbles: true,
            cancelable: true,
          })
        );

        await act(async () => {
          wrapper.rerender(
            <Board {...props} currentPlayer="black" opponent="white" />
          );
        });

        const square = wrapper.getByTestId("square-l2c4");
        expect(square).toHaveClass("contains-available-chip");
      });
    });

    describe("on white player turn the square...", () => {
      let props;
      let wrapper;

      beforeEach(async () => {
        props = {
          currentPlayer: "white",
          setCurrentPlayer: jest.fn(),
          opponent: "black",
          setOpponent: jest.fn(),
        };

        await act(async () => {
          wrapper = render(<Board {...props} />);
        });
      });

      it("should be available if there is a black chip on the square below and a white chip two squares below", () => {
        const square = wrapper.getByTestId("square-l2c3");
        expect(square).toHaveClass("contains-available-chip");
      });
    });
  });
});
