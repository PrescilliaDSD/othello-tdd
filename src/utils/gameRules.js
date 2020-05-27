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

export const WHITE = "white";
export const BLACK = "black";
export const EMPTY = undefined;

export const getCell = (board, [line, column]) => board[line][column];

export const addChip = (board, color, [line, column] = []) => {
  if (
    line >= board.length ||
    line < 0 ||
    column < 0 ||
    column >= board[line].length
  )
    throw new Error("Cette case n'existe pas.");
  if (board[line][column] !== "empty")
    throw new Error("Il y a déjà un pion dans cette case.");

  return board.map((row, lineIndex) =>
    row.map((cell, columnIndex) =>
      lineIndex === line && columnIndex === column ? color : cell
    )
  );
};

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
        squareLineIndex <= 7 &&
        squareColumnIndex === columnIndex
      );
    case "toTheTopLeft":
      return squareLineIndex <= 5 && squareColumnIndex <= 5;
    case "toTheTopRight":
      return squareLineIndex <= 5 && squareColumnIndex >= 2;
    case "toTheBottomLeft":
      return squareLineIndex >= 2 && squareColumnIndex <= 5;
    case "toTheBottomRight":
      return squareLineIndex >= 2 && squareColumnIndex >= 2;
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
  setBoard,
  opponent
) => {
  const clearedBoard = await clearAvailableSquares(board);
  const newBoardWithAvailableChip = await clearedBoard.map(
    (line, lineIndex) => {
      return line.map((square, columnIndex) => {
        if (square !== "empty") return square;
        if (
          lineIndex <= 5 &&
          board[lineIndex + 1][columnIndex] === opponent &&
          board[lineIndex + 2][columnIndex] === currentPlayer
        ) {
          return "available";
        }
        return square;
      });
    }
  );
  setBoard(newBoardWithAvailableChip);
};

// export const turningChipAfterAPlayerAddedOne = (
//   squareLineIndex,
//   squareColumnIndex,
//   currentPlayer,
//   opponent,
//   board,
//   setBoard
// ) => {
//   const newBoard = board.map((line, lineIndex) => {
//     return line.map((square, columnIndex) => {
//       if (square === opponent) {
//         if (
//           checkBoardLimits(
//             squareColumnIndex,
//             columnIndex,
//             squareLineIndex,
//             lineIndex,
//             "toTheRight"
//           ) &&
//           (squareColumnIndex + 1 === columnIndex ||
//             squareColumnIndex + 2 === columnIndex)
//         ) {
//           if (line[columnIndex + 1] === currentPlayer) {
//             return currentPlayer;
//           }
//           if (line[columnIndex + 1] === opponent) {
//             if (line[columnIndex + 2] === currentPlayer) {
//               return currentPlayer;
//             }
//             if (
//               line[columnIndex + 2] === opponent &&
//               line[columnIndex + 3] === currentPlayer
//             ) {
//               return currentPlayer;
//             }
//             return square;
//           }
//           return square;
//         }

//         if (
//           checkBoardLimits(
//             squareColumnIndex,
//             columnIndex,
//             squareLineIndex,
//             lineIndex,
//             "toTheLeft"
//           ) &&
//           (squareColumnIndex - 1 === columnIndex ||
//             squareColumnIndex - 2 === columnIndex)
//         ) {
//           if (line[columnIndex - 1] === currentPlayer) {
//             return currentPlayer;
//           }
//           if (line[columnIndex - 1] === opponent) {
//             if (line[columnIndex - 2] === currentPlayer) {
//               return currentPlayer;
//             }
//             if (
//               line[columnIndex - 2] === opponent &&
//               line[columnIndex - 3] === currentPlayer
//             ) {
//               return currentPlayer;
//             } else {
//               return square;
//             }
//           } else {
//             return square;
//           }
//         }

//         if (
//           checkBoardLimits(
//             squareColumnIndex,
//             columnIndex,
//             squareLineIndex,
//             lineIndex,
//             "toTheBottom"
//           ) &&
//           (squareLineIndex + 1 === lineIndex ||
//             squareLineIndex + 2 === lineIndex)
//         ) {
//           if (board[lineIndex + 1][columnIndex] === currentPlayer) {
//             return currentPlayer;
//           }
//           if (board[lineIndex + 1][columnIndex] === opponent) {
//             if (board[lineIndex + 2][columnIndex] === currentPlayer) {
//               return currentPlayer;
//             }
//             if (
//               board[lineIndex + 2][columnIndex] === opponent &&
//               board[lineIndex + 3][columnIndex] === currentPlayer
//             ) {
//               return currentPlayer;
//             } else {
//               return square;
//             }
//           } else {
//             return square;
//           }
//         }

//         if (
//           checkBoardLimits(
//             squareColumnIndex,
//             columnIndex,
//             squareLineIndex,
//             lineIndex,
//             "toTheTop"
//           ) &&
//           (squareLineIndex - 1 === lineIndex ||
//             squareLineIndex - 2 === lineIndex)
//         ) {
//           if (board[lineIndex - 1][columnIndex] === currentPlayer) {
//             return currentPlayer;
//           }
//           if (board[lineIndex - 1][columnIndex] === opponent) {
//             if (board[lineIndex - 2][columnIndex] === currentPlayer) {
//               return currentPlayer;
//             }
//             if (
//               board[lineIndex - 2][columnIndex] === opponent &&
//               board[lineIndex - 3][columnIndex] === currentPlayer
//             ) {
//               return currentPlayer;
//             } else {
//               return square;
//             }
//           } else {
//             return square;
//           }
//         }
//         if (
//           (checkBoardLimits(
//             squareColumnIndex,
//             columnIndex,
//             squareLineIndex,
//             lineIndex,
//             "toTheTopLeft"
//           ) &&
//             squareColumnIndex + 1 === columnIndex &&
//             squareLineIndex + 1 === lineIndex) ||
//           (squareColumnIndex + 2 === columnIndex &&
//             squareLineIndex + 2 === lineIndex)
//         ) {
//           if (board[lineIndex + 1][columnIndex + 1] === currentPlayer) {
//             return currentPlayer;
//           }
//           if (board[lineIndex + 1][columnIndex + 1] === opponent) {
//             if (board[lineIndex + 2][columnIndex + 2] === currentPlayer) {
//               return currentPlayer;
//             }
//             if (
//               board[lineIndex + 2][columnIndex + 2] === opponent &&
//               board[lineIndex + 3][columnIndex + 3] === currentPlayer
//             ) {
//               return currentPlayer;
//             }
//             return square;
//           }
//           return square;
//         }
//         if (
//           (checkBoardLimits(
//             squareColumnIndex,
//             columnIndex,
//             squareLineIndex,
//             lineIndex,
//             "toTheTopRight"
//           ) &&
//             squareColumnIndex - 1 === columnIndex &&
//             squareLineIndex + 1 === lineIndex) ||
//           (squareColumnIndex - 2 === columnIndex &&
//             squareLineIndex + 2 === lineIndex)
//         ) {
//           if (board[lineIndex + 1][columnIndex - 1] === currentPlayer) {
//             return currentPlayer;
//           }
//           if (board[lineIndex + 1][columnIndex - 1] === opponent) {
//             if (board[lineIndex + 2][columnIndex - 2] === currentPlayer) {
//               return currentPlayer;
//             }
//             if (
//               board[lineIndex + 2][columnIndex - 2] === opponent &&
//               board[lineIndex + 3][columnIndex - 3] === currentPlayer
//             ) {
//               return currentPlayer;
//             }
//             return square;
//           }
//           return square;
//         }
//         if (
//           (checkBoardLimits(
//             squareColumnIndex,
//             columnIndex,
//             squareLineIndex,
//             lineIndex,
//             "toTheBottomLeft"
//           ) &&
//             squareColumnIndex + 1 === columnIndex &&
//             squareLineIndex - 1 === lineIndex) ||
//           (squareColumnIndex + 2 === columnIndex &&
//             squareLineIndex - 2 === lineIndex)
//         ) {
//           if (board[lineIndex - 1][columnIndex + 1] === currentPlayer) {
//             return currentPlayer;
//           }
//           if (board[lineIndex - 1][columnIndex + 1] === opponent) {
//             if (board[lineIndex - 2][columnIndex + 2] === currentPlayer) {
//               return currentPlayer;
//             }
//             if (
//               board[lineIndex - 2][columnIndex + 2] === opponent &&
//               board[lineIndex - 3][columnIndex + 3] === currentPlayer
//             ) {
//               return currentPlayer;
//             }
//             return square;
//           }
//           return square;
//         }
//         if (
//           (checkBoardLimits(
//             squareColumnIndex,
//             columnIndex,
//             squareLineIndex,
//             lineIndex,
//             "toTheBottomRight"
//           ) &&
//             squareColumnIndex - 1 === columnIndex &&
//             squareLineIndex - 1 === lineIndex) ||
//           (squareColumnIndex - 2 === columnIndex &&
//             squareLineIndex - 2 === lineIndex)
//         ) {
//           if (board[lineIndex - 1][columnIndex - 1] === currentPlayer) {
//             return currentPlayer;
//           }
//           if (board[lineIndex - 1][columnIndex - 1] === opponent) {
//             if (board[lineIndex - 2][columnIndex - 2] === currentPlayer) {
//               return currentPlayer;
//             }
//             if (
//               board[lineIndex - 2][columnIndex - 2] === opponent &&
//               board[lineIndex - 3][columnIndex - 3] === currentPlayer
//             ) {
//               return currentPlayer;
//             }
//             return square;
//           }
//           return square;
//         }
//       }
//       return square;
//     });
//   });
//   setBoard(newBoard);
// };
