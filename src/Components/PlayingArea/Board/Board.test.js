import React from "react";
import { render, fireEvent, act } from "@testing-library/react";
import { DndProvider } from "react-dnd";
import Backend from "react-dnd-html5-backend";
import Board from "./Board";

describe("Board component", () => {
  describe("board initialization", () => {
    let props;
    let wrapper;

    beforeEach(async () => {
      const identity = (el) => el;

      props = {
        connectDragSource: identity,
        currentPlayer: "black",
        setCurrentPlayer: jest.fn(),
      };

      await act(async () => {
        wrapper = render(
          <DndProvider backend={Backend}>
            <Board {...props} />
          </DndProvider>
        );
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
        const identity = (el) => el;

        props = {
          connectDragSource: identity,
          currentPlayer: "black",
          setCurrentPlayer: jest.fn(),
        };

        await act(async () => {
          wrapper = render(
            <DndProvider backend={Backend}>
              <Board {...props} />
            </DndProvider>
          );
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
        await act(async () => {
          fireEvent(
            wrapper.getByTestId("square-l5c3"),
            new MouseEvent("click", {
              bubbles: true,
              cancelable: true,
            })
          );

          wrapper.rerender(
            <DndProvider backend={Backend}>
              <Board {...props} currentPlayer="white" />
            </DndProvider>
          );

          fireEvent(
            wrapper.getByTestId("square-l5c4"),
            new MouseEvent("click", {
              bubbles: true,
              cancelable: true,
            })
          );

          wrapper.rerender(
            <DndProvider backend={Backend}>
              <Board {...props} currentPlayer="black" />
            </DndProvider>
          );

          fireEvent(
            wrapper.getByTestId("square-l6c4"),
            new MouseEvent("click", {
              bubbles: true,
              cancelable: true,
            })
          );

          wrapper.rerender(
            <DndProvider backend={Backend}>
              <Board {...props} currentPlayer="white" />
            </DndProvider>
          );

          fireEvent(
            wrapper.getByTestId("square-l3c2"),
            new MouseEvent("click", {
              bubbles: true,
              cancelable: true,
            })
          );

          wrapper.rerender(
            <DndProvider backend={Backend}>
              <Board {...props} currentPlayer="black" />
            </DndProvider>
          );
        });

        const square = wrapper.getByTestId("square-l2c4");
        expect(square).toHaveClass("contains-available-chip");
      });

      it("should be available if there is 2 white chips above and a black chip three squares above", async () => {
        await act(async () => {
          fireEvent(
            wrapper.getByTestId("square-l2c4"),
            new MouseEvent("click", {
              bubbles: true,
              cancelable: true,
            })
          );

          wrapper.rerender(
            <DndProvider backend={Backend}>
              <Board {...props} currentPlayer="white" />
            </DndProvider>
          );

          fireEvent(
            wrapper.getByTestId("square-l2c3"),
            new MouseEvent("click", {
              bubbles: true,
              cancelable: true,
            })
          );

          wrapper.rerender(
            <DndProvider backend={Backend}>
              <Board {...props} currentPlayer="black" />
            </DndProvider>
          );

          fireEvent(
            wrapper.getByTestId("square-l2c2"),
            new MouseEvent("click", {
              bubbles: true,
              cancelable: true,
            })
          );

          wrapper.rerender(
            <DndProvider backend={Backend}>
              <Board {...props} currentPlayer="white" />
            </DndProvider>
          );

          fireEvent(
            wrapper.getByTestId("square-l3c5"),
            new MouseEvent("click", {
              bubbles: true,
              cancelable: true,
            })
          );

          wrapper.rerender(
            <DndProvider backend={Backend}>
              <Board {...props} currentPlayer="black" />
            </DndProvider>
          );
        });

        const square = wrapper.getByTestId("square-l5c3");
        expect(square).toHaveClass("contains-available-chip");
      });

      it("should be available if there is 2 white chips on the right and a black chip three squares right", async () => {
        await act(async () => {
          fireEvent(
            wrapper.getByTestId("square-l3c5"),
            new MouseEvent("click", {
              bubbles: true,
              cancelable: true,
            })
          );

          wrapper.rerender(
            <DndProvider backend={Backend}>
              <Board {...props} currentPlayer="white" />
            </DndProvider>
          );

          fireEvent(
            wrapper.getByTestId("square-l4c5"),
            new MouseEvent("click", {
              bubbles: true,
              cancelable: true,
            })
          );

          wrapper.rerender(
            <DndProvider backend={Backend}>
              <Board {...props} currentPlayer="black" />
            </DndProvider>
          );

          fireEvent(
            wrapper.getByTestId("square-l5c5"),
            new MouseEvent("click", {
              bubbles: true,
              cancelable: true,
            })
          );

          wrapper.rerender(
            <DndProvider backend={Backend}>
              <Board {...props} currentPlayer="white" />
            </DndProvider>
          );

          fireEvent(
            wrapper.getByTestId("square-l2c4"),
            new MouseEvent("click", {
              bubbles: true,
              cancelable: true,
            })
          );

          wrapper.rerender(
            <DndProvider backend={Backend}>
              <Board {...props} currentPlayer="black" />
            </DndProvider>
          );
        });

        const square = wrapper.getByTestId("square-l4c2");
        expect(square).toHaveClass("contains-available-chip");
      });

      it("should be available if there is 2 white chips on the left and a black chip three squares left", async () => {
        await act(async () => {
          fireEvent(
            wrapper.getByTestId("square-l4c2"),
            new MouseEvent("click", {
              bubbles: true,
              cancelable: true,
            })
          );

          wrapper.rerender(
            <DndProvider backend={Backend}>
              <Board {...props} currentPlayer="white" />
            </DndProvider>
          );

          fireEvent(
            wrapper.getByTestId("square-l3c2"),
            new MouseEvent("click", {
              bubbles: true,
              cancelable: true,
            })
          );

          wrapper.rerender(
            <DndProvider backend={Backend}>
              <Board {...props} currentPlayer="black" />
            </DndProvider>
          );

          fireEvent(
            wrapper.getByTestId("square-l2c2"),
            new MouseEvent("click", {
              bubbles: true,
              cancelable: true,
            })
          );

          wrapper.rerender(
            <DndProvider backend={Backend}>
              <Board {...props} currentPlayer="white" />
            </DndProvider>
          );

          fireEvent(
            wrapper.getByTestId("square-l5c3"),
            new MouseEvent("click", {
              bubbles: true,
              cancelable: true,
            })
          );

          wrapper.rerender(
            <DndProvider backend={Backend}>
              <Board {...props} currentPlayer="black" />
            </DndProvider>
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
        const identity = (el) => el;

        props = {
          connectDragSource: identity,
          currentPlayer: "white",
          setCurrentPlayer: jest.fn(),
        };

        await act(async () => {
          wrapper = render(
            <DndProvider backend={Backend}>
              <Board {...props} />
            </DndProvider>
          );
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
        const identity = (el) => el;

        props = {
          connectDragSource: identity,
          currentPlayer: "black",
          setCurrentPlayer: jest.fn(),
        };

        await act(async () => {
          wrapper = render(
            <DndProvider backend={Backend}>
              <Board {...props} />
            </DndProvider>
          );
        });
      });

      it("should turn black if adding a black chip on the right and there is a black chip on the left", () => {
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

      it("should turn black if adding a black chip on the left and there is a black chip on the right", () => {
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

      it("should turn black if adding a black chip above and there is a black chip below", () => {
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

      it("should turn black if adding a black chip below and there is a black chip above", () => {
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
    });

    describe("on white player turn", () => {
      let props;
      let wrapper;

      beforeEach(async () => {
        const identity = (el) => el;

        props = {
          connectDragSource: identity,
          currentPlayer: "white",
          setCurrentPlayer: jest.fn(),
        };

        await act(async () => {
          wrapper = render(
            <DndProvider backend={Backend}>
              <Board {...props} />
            </DndProvider>
          );
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
