export const startingBoard = [
  ["empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty"],
  ["empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty"],
  ["empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty"],
  ["empty", "empty", "empty", "black", "white", "empty", "empty", "empty"],
  ["empty", "empty", "empty", "white", "black", "empty", "empty", "empty"],
  ["empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty"],
  ["empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty"],
  ["empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty"],
];

export const checkIfASquareIsAvailable = (board, currentPlayer, setBoard) => {
  const newBoardWithAvailableChip = board.map((line, lineIndex) => {
    return line.map((square, columnIndex) => {
      if (square === "empty") {
        if (currentPlayer === "black") {
          if (
            lineIndex <= 5 &&
            board[lineIndex + 1][columnIndex] === "white" &&
            board[lineIndex + 2][columnIndex] === "black"
          ) {
            return "available";
          }
          if (
            lineIndex >= 2 &&
            board[lineIndex - 1][columnIndex] === "white" &&
            board[lineIndex - 2][columnIndex] === "black"
          ) {
            return "available";
          }
          if (
            columnIndex <= 5 &&
            board[lineIndex][columnIndex + 1] === "white" &&
            board[lineIndex][columnIndex + 2] === "black"
          ) {
            return "available";
          }
          if (
            columnIndex >= 2 &&
            board[lineIndex][columnIndex - 1] === "white" &&
            board[lineIndex][columnIndex - 2] === "black"
          ) {
            return "available";
          }
        }
        if (currentPlayer === "white") {
          if (
            lineIndex <= 5 &&
            board[lineIndex + 1][columnIndex] === "black" &&
            board[lineIndex + 2][columnIndex] === "white"
          ) {
            return "available";
          }
          if (
            lineIndex >= 2 &&
            board[lineIndex - 1][columnIndex] === "black" &&
            board[lineIndex - 2][columnIndex] === "white"
          ) {
            return "available";
          }
          if (
            columnIndex <= 5 &&
            board[lineIndex][columnIndex - 1] === "black" &&
            board[lineIndex][columnIndex - 2] === "white"
          ) {
            return "available";
          }

          if (
            columnIndex >= 2 &&
            board[lineIndex][columnIndex + 1] === "black" &&
            board[lineIndex][columnIndex + 2] === "white"
          ) {
            return "available";
          }
        }
      }
      return square;
    });
  });
  setBoard(newBoardWithAvailableChip);
};

export const turningChipAfterAPlayerAddedOne = (
  squareLineIndex,
  squareColumnIndex,
  currentPlayer,
  board,
  setBoard
) => {
  const newBoard = board.map((line, lineIndex) => {
    return line.map((column, columnIndex) => {
      if (currentPlayer === "black") {
        if (
          squareColumnIndex >= 2 &&
          board[squareLineIndex][squareColumnIndex - 1] === "white" &&
          squareLineIndex === lineIndex &&
          squareColumnIndex - 1 === columnIndex &&
          board[squareLineIndex][squareColumnIndex - 2] === "black"
        ) {
          return "black";
        }
        if (
          squareColumnIndex <= 5 &&
          board[squareLineIndex][squareColumnIndex + 1] === "white" &&
          squareLineIndex === lineIndex &&
          squareColumnIndex + 1 === columnIndex &&
          board[squareLineIndex][squareColumnIndex + 2] === "black"
        ) {
          return "black";
        }
        if (
          squareLineIndex <= 5 &&
          board[squareLineIndex + 1][squareColumnIndex] === "white" &&
          squareLineIndex + 1 === lineIndex &&
          squareColumnIndex === columnIndex &&
          board[squareLineIndex + 2][squareColumnIndex] === "black"
        ) {
          return "black";
        }
        if (
          squareLineIndex >= 2 &&
          board[squareLineIndex - 1][squareColumnIndex] === "white" &&
          squareLineIndex - 1 === lineIndex &&
          squareColumnIndex === columnIndex &&
          board[squareLineIndex - 2][squareColumnIndex] === "black"
        ) {
          return "black";
        }
      }
      if (currentPlayer === "white") {
        if (
          squareColumnIndex >= 2 &&
          board[squareLineIndex][squareColumnIndex - 1] === "black" &&
          squareLineIndex === lineIndex &&
          squareColumnIndex - 1 === columnIndex &&
          board[squareLineIndex][squareColumnIndex - 2] === "white"
        ) {
          return "white";
        }
        if (
          squareColumnIndex <= 5 &&
          board[squareLineIndex][squareColumnIndex + 1] === "black" &&
          squareLineIndex === lineIndex &&
          squareColumnIndex + 1 === columnIndex &&
          board[squareLineIndex][squareColumnIndex + 2] === "white"
        ) {
          return "white";
        }
        if (
          squareLineIndex <= 5 &&
          board[squareLineIndex + 1][squareColumnIndex] === "black" &&
          squareLineIndex + 1 === lineIndex &&
          squareColumnIndex === columnIndex &&
          board[squareLineIndex + 2][squareColumnIndex] === "white"
        ) {
          return "white";
        }
        if (
          squareLineIndex >= 2 &&
          board[squareLineIndex - 1][squareColumnIndex] === "black" &&
          squareLineIndex - 1 === lineIndex &&
          squareColumnIndex === columnIndex &&
          board[squareLineIndex - 2][squareColumnIndex] === "white"
        ) {
          return "white";
        }
      }
      return column;
    });
  });
  setBoard(newBoard);
};
