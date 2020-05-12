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

const checkBoardLimits = (
  squareColumnIndex,
  columnIndex,
  squareLineIndex,
  lineIndex,
  direction
) => {
  switch (direction) {
    case "toTheRight":
      return (
        squareColumnIndex >= 0 &&
        squareColumnIndex <= 5 &&
        squareLineIndex === lineIndex
      );
    case "toTheLeft":
      return (
        squareColumnIndex >= 2 &&
        squareColumnIndex <= 7 &&
        squareLineIndex === lineIndex
      );
    case "toTheBottom":
      return (
        squareLineIndex >= 0 &&
        squareLineIndex <= 5 &&
        squareColumnIndex === columnIndex
      );
    case "toTheTop":
      return (
        squareLineIndex >= 2 &&
        squareColumnIndex <= 7 &&
        squareColumnIndex === columnIndex
      );
  }
};

export const clearAvailableSquares = (board) => {
  return board.map((line) => {
    return line.map((square) => {
      return square === "available" ? "empty" : square;
    });
  });
};

export const checkIfASquareIsAvailable = async (
  board,
  currentPlayer,
  setBoard
) => {
  const clearedBoard = await clearAvailableSquares(board);
  const newBoardWithAvailableChip = await clearedBoard.map(
    (line, lineIndex) => {
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
            if (
              lineIndex <= 5 &&
              board[lineIndex + 1][columnIndex] === "white" &&
              board[lineIndex + 2][columnIndex] === "white" &&
              board[lineIndex + 3][columnIndex] === "black"
            ) {
              return "available";
            }
            if (
              lineIndex >= 2 &&
              board[lineIndex - 1][columnIndex] === "white" &&
              board[lineIndex - 2][columnIndex] === "white" &&
              board[lineIndex - 3][columnIndex] === "black"
            ) {
              return "available";
            }
            if (
              columnIndex <= 5 &&
              board[lineIndex][columnIndex + 1] === "white" &&
              board[lineIndex][columnIndex + 2] === "white" &&
              board[lineIndex][columnIndex + 3] === "black"
            ) {
              return "available";
            }
            if (
              columnIndex >= 2 &&
              board[lineIndex][columnIndex - 1] === "white" &&
              board[lineIndex][columnIndex - 2] === "white" &&
              board[lineIndex][columnIndex - 3] === "black"
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
    }
  );
  setBoard(newBoardWithAvailableChip);
};

export const turningChipAfterAPlayerAddedOne = (
  squareLineIndex,
  squareColumnIndex,
  currentPlayer,
  opponent,
  board,
  setBoard
) => {
  const newBoard = board.map((line, lineIndex) => {
    return line.map((square, columnIndex) => {
      if (square === opponent) {
        if (
          checkBoardLimits(
            squareColumnIndex,
            columnIndex,
            squareLineIndex,
            lineIndex,
            "toTheRight"
          ) &&
          (squareColumnIndex + 1 === columnIndex ||
            squareColumnIndex + 2 === columnIndex)
        ) {
          if (line[columnIndex + 1] === currentPlayer) {
            return currentPlayer;
          }
          if (line[columnIndex + 1] === opponent) {
            if (line[columnIndex + 2] === currentPlayer) {
              return currentPlayer;
            }
            if (
              line[columnIndex + 2] === opponent &&
              line[columnIndex + 3] === currentPlayer
            ) {
              return currentPlayer;
            }
            return square;
          }
          return square;
        }

        if (
          checkBoardLimits(
            squareColumnIndex,
            columnIndex,
            squareLineIndex,
            lineIndex,
            "toTheLeft"
          ) &&
          (squareColumnIndex - 1 === columnIndex ||
            squareColumnIndex - 2 === columnIndex)
        ) {
          if (line[columnIndex - 1] === currentPlayer) {
            return currentPlayer;
          }
          if (line[columnIndex - 1] === opponent) {
            if (line[columnIndex - 2] === currentPlayer) {
              return currentPlayer;
            }
            if (
              line[columnIndex - 2] === opponent &&
              line[columnIndex - 3] === currentPlayer
            ) {
              return currentPlayer;
            } else {
              return square;
            }
          } else {
            return square;
          }
        }

        if (
          checkBoardLimits(
            squareColumnIndex,
            columnIndex,
            squareLineIndex,
            lineIndex,
            "toTheBottom"
          ) &&
          (squareLineIndex + 1 === lineIndex ||
            squareLineIndex + 2 === lineIndex)
        ) {
          if (board[lineIndex + 1][columnIndex] === currentPlayer) {
            return currentPlayer;
          }
          if (board[lineIndex + 1][columnIndex] === opponent) {
            if (board[lineIndex + 2][columnIndex] === currentPlayer) {
              return currentPlayer;
            }
            if (
              board[lineIndex + 2][columnIndex] === opponent &&
              board[lineIndex + 3][columnIndex] === currentPlayer
            ) {
              return currentPlayer;
            } else {
              return square;
            }
          } else {
            return square;
          }
        }

        if (
          checkBoardLimits(
            squareColumnIndex,
            columnIndex,
            squareLineIndex,
            lineIndex,
            "toTheTop"
          ) &&
          (squareLineIndex - 1 === lineIndex ||
            squareLineIndex - 2 === lineIndex)
        ) {
          if (board[lineIndex - 1][columnIndex] === currentPlayer) {
            return currentPlayer;
          }
          if (board[lineIndex - 1][columnIndex] === opponent) {
            if (board[lineIndex - 2][columnIndex] === currentPlayer) {
              return currentPlayer;
            }
            if (
              board[lineIndex - 2][columnIndex] === opponent &&
              board[lineIndex - 3][columnIndex] === currentPlayer
            ) {
              return currentPlayer;
            } else {
              return square;
            }
          } else {
            return square;
          }
        }
      }
      return square;
    });
  });
  setBoard(newBoard);
};
