import { startingBoard, addChip, getCell, WHITE, BLACK } from "./gameRules";

describe("Board", () => {
  let board = startingBoard;

  describe("when we add a chip a [0,0]", () => {
    it("should set the white chip on the board", () => {
      const newBoardState = addChip(board, WHITE, [0, 0]);
      expect(getCell(newBoardState, [0, 0])).toBe(WHITE);
    });

    it("should set the black chip on the board", () => {
      const newBoardState = addChip(board, BLACK, [0, 0]);
      expect(getCell(newBoardState, [0, 0])).toBe(BLACK);
    });
  });

  describe("when we add a chip outside of the board", () => {
    describe("when it's outside lines", () => {
      it("should throw an error", () => {
        expect(() => addChip(board, BLACK, [8, 0])).toThrowError(
          "Cette case n'existe pas."
        );
      });
    });

    describe("when it's outside columns", () => {
      it("should throw an error", () => {
        expect(() => addChip(board, BLACK, [0, 8])).toThrowError(
          "Cette case n'existe pas."
        );
      });
    });

    describe("when both line and column are outside", () => {
      it("should throw an error", () => {
        expect(() => addChip(board, BLACK, [8, 8])).toThrowError(
          "Cette case n'existe pas."
        );
      });
    });

    describe("when it's outside lines", () => {
      it("should throw an error", () => {
        expect(() => addChip(board, BLACK, [-1, 0])).toThrowError(
          "Cette case n'existe pas."
        );
      });
    });

    describe("when it's outside columns", () => {
      it("should throw an error", () => {
        expect(() => addChip(board, BLACK, [0, -1])).toThrowError(
          "Cette case n'existe pas."
        );
      });
    });
  });

  describe("when the cell is not empty", () => {
    it("should throw an error", () => {
      expect(() => addChip(board, WHITE, [3, 4])).toThrowError(
        "Il y a déjà un pion dans cette case."
      );
    });
  });
});

describe("Game rules", () => {
  describe("when the game start", () => {});
});
