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
    describe("on black player turn the square...", () => {
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

      it("should be available if there is a white chip on the square above and a black chip two squares above", () => {
        const square = wrapper.getByTestId("square-l5c3");
        expect(square).toHaveClass("contains-available-chip");
      });

      it("should be available if there is a white chip one square right and a black chip two squares right", () => {
        const square = wrapper.getByTestId("square-l4c2");
        expect(square).toHaveClass("contains-available-chip");
      });

      it("should be available if there is a white chip one square left and a black chip two squares left", () => {
        const square = wrapper.getByTestId("square-l3c5");
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

      it("should be available if there is 2 white chips above and a black chip three squares above", async () => {
        fireEvent(
          wrapper.getByTestId("square-l2c4"),
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
          wrapper.getByTestId("square-l2c3"),
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
          wrapper.getByTestId("square-l2c2"),
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
          wrapper.getByTestId("square-l3c5"),
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

        const square = wrapper.getByTestId("square-l5c3");
        expect(square).toHaveClass("contains-available-chip");
      });

      it("should be available if there is 2 white chips on the right and a black chip three squares right", async () => {
        fireEvent(
          wrapper.getByTestId("square-l3c5"),
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
          wrapper.getByTestId("square-l4c5"),
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
          wrapper.getByTestId("square-l2c4"),
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

        const square = wrapper.getByTestId("square-l4c2");
        expect(square).toHaveClass("contains-available-chip");
      });

      it("should be available if there is 2 white chips on the left and a black chip three squares left", async () => {
        fireEvent(
          wrapper.getByTestId("square-l4c2"),
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

        fireEvent(
          wrapper.getByTestId("square-l2c2"),
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
          wrapper.getByTestId("square-l5c3"),
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

        const square = wrapper.getByTestId("square-l3c5");
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

      it("should be available if there is a black chip on the square above and a white chip two squares above", () => {
        const square = wrapper.getByTestId("square-l5c4");
        expect(square).toHaveClass("contains-available-chip");
      });

      it("should be available if there is a black chip one square left and a white chip two squares left", () => {
        const square = wrapper.getByTestId("square-l4c5");
        expect(square).toHaveClass("contains-available-chip");
      });

      it("should be available if there is a black chip one square right and a white chip two squares right", () => {
        const square = wrapper.getByTestId("square-l3c2");
        expect(square).toHaveClass("contains-available-chip");
      });
    });
  });

  describe("rules to change chips color", () => {
    describe("on black player turn", () => {
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

      it("should turn one chip black if adding a black chip on the right and there is a black chip on the left", () => {
        const squareWithChipThatWillTurn = wrapper.getByTestId("square-l3c4");

        fireEvent(
          wrapper.getByTestId("square-l3c5"),
          new MouseEvent("click", {
            bubbles: true,
            cancelable: true,
          })
        );
        expect(squareWithChipThatWillTurn).toHaveClass("contains-black-chip");
      });

      it("should turn one chip black if adding a black chip on the left and there is a black chip on the right", () => {
        const squareWithChipThatWillTurn = wrapper.getByTestId("square-l4c3");

        fireEvent(
          wrapper.getByTestId("square-l4c2"),
          new MouseEvent("click", {
            bubbles: true,
            cancelable: true,
          })
        );
        expect(squareWithChipThatWillTurn).toHaveClass("contains-black-chip");
      });

      it("should turn one chip black if adding a black chip above and there is a black chip below", () => {
        const squareWithChipThatWillTurn = wrapper.getByTestId("square-l3c4");

        fireEvent(
          wrapper.getByTestId("square-l2c4"),
          new MouseEvent("click", {
            bubbles: true,
            cancelable: true,
          })
        );
        expect(squareWithChipThatWillTurn).toHaveClass("contains-black-chip");
      });

      it("should turn one chip black if adding a black chip below and there is a black chip above", () => {
        const squareWithChipThatWillTurn = wrapper.getByTestId("square-l4c3");

        fireEvent(
          wrapper.getByTestId("square-l5c3"),
          new MouseEvent("click", {
            bubbles: true,
            cancelable: true,
          })
        );
        expect(squareWithChipThatWillTurn).toHaveClass("contains-black-chip");
      });

      it("should turn two chips black if adding a black chip on the right and there is a black chip on the left", async () => {
        const squareWithChipThatWillTurn1 = wrapper.getByTestId("square-l4c3");
        const squareWithChipThatWillTurn2 = wrapper.getByTestId("square-l4c4");

        fireEvent(
          wrapper.getByTestId("square-l3c5"),
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
          wrapper.getByTestId("square-l4c5"),
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
          wrapper.getByTestId("square-l2c4"),
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
          wrapper.getByTestId("square-l4c2"),
          new MouseEvent("click", {
            bubbles: true,
            cancelable: true,
          })
        );

        expect(squareWithChipThatWillTurn1).toHaveClass("contains-black-chip");
        expect(squareWithChipThatWillTurn2).toHaveClass("contains-black-chip");
      });

      it("should turn two chips black if adding a black chip on the left and there is a black chip on the right", async () => {
        const squareWithChipThatWillTurn1 = wrapper.getByTestId("square-l3c3");
        const squareWithChipThatWillTurn2 = wrapper.getByTestId("square-l3c4");

        fireEvent(
          wrapper.getByTestId("square-l4c2"),
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
        fireEvent(
          wrapper.getByTestId("square-l2c2"),
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
          wrapper.getByTestId("square-l5c3"),
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
          wrapper.getByTestId("square-l3c5"),
          new MouseEvent("click", {
            bubbles: true,
            cancelable: true,
          })
        );

        expect(squareWithChipThatWillTurn1).toHaveClass("contains-black-chip");
        expect(squareWithChipThatWillTurn2).toHaveClass("contains-black-chip");
      });

      it("should turn two chips black if adding a black chip above and there is a black chip below", async () => {
        const squareWithChipThatWillTurn1 = wrapper.getByTestId("square-l3c4");
        const squareWithChipThatWillTurn2 = wrapper.getByTestId("square-l4c4");

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
          wrapper.getByTestId("square-l4c2"),
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
          wrapper.getByTestId("square-l2c4"),
          new MouseEvent("click", {
            bubbles: true,
            cancelable: true,
          })
        );

        expect(squareWithChipThatWillTurn1).toHaveClass("contains-black-chip");
        expect(squareWithChipThatWillTurn2).toHaveClass("contains-black-chip");
      });

      it("should turn two chips black if adding a black chip above and there is a black chip below", async () => {
        const squareWithChipThatWillTurn1 = wrapper.getByTestId("square-l4c3");
        const squareWithChipThatWillTurn2 = wrapper.getByTestId("square-l3c3");

        fireEvent(
          wrapper.getByTestId("square-l2c4"),
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
          wrapper.getByTestId("square-l2c3"),
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
          wrapper.getByTestId("square-l2c2"),
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
          wrapper.getByTestId("square-l3c5"),
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
          wrapper.getByTestId("square-l5c3"),
          new MouseEvent("click", {
            bubbles: true,
            cancelable: true,
          })
        );

        expect(squareWithChipThatWillTurn1).toHaveClass("contains-black-chip");
        expect(squareWithChipThatWillTurn2).toHaveClass("contains-black-chip");
      });
    });

    describe("on white player turn", () => {
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

      it("should turn white if adding a white chip on the right and there is a white chip on the left", () => {
        const squareWithChipThatWillTurn = wrapper.getByTestId("square-l4c4");

        fireEvent(
          wrapper.getByTestId("square-l4c5"),
          new MouseEvent("click", {
            bubbles: true,
            cancelable: true,
          })
        );
        expect(squareWithChipThatWillTurn).toHaveClass("contains-white-chip");
      });

      it("should turn white if adding a white chip on the left and there is a white chip on the right", () => {
        const squareWithChipThatWillTurn = wrapper.getByTestId("square-l3c3");

        fireEvent(
          wrapper.getByTestId("square-l3c2"),
          new MouseEvent("click", {
            bubbles: true,
            cancelable: true,
          })
        );
        expect(squareWithChipThatWillTurn).toHaveClass("contains-white-chip");
      });

      it("should turn white if adding a white chip above and there is a black chip below", () => {
        const squareWithChipThatWillTurn = wrapper.getByTestId("square-l3c3");

        fireEvent(
          wrapper.getByTestId("square-l2c3"),
          new MouseEvent("click", {
            bubbles: true,
            cancelable: true,
          })
        );
        expect(squareWithChipThatWillTurn).toHaveClass("contains-white-chip");
      });

      it("should turn white if adding a white chip below and there is a black chip above", () => {
        const squareWithChipThatWillTurn = wrapper.getByTestId("square-l4c4");

        fireEvent(
          wrapper.getByTestId("square-l5c4"),
          new MouseEvent("click", {
            bubbles: true,
            cancelable: true,
          })
        );
        expect(squareWithChipThatWillTurn).toHaveClass("contains-white-chip");
      });
    });
  });
});
