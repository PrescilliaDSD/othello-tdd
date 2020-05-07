import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Square from "./Square";
import "./Board.scss";

const Board = ({ currentPlayer, setCurrentPlayer }) => {
  const [board, setBoard] = useState([
    ["empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty"],
    ["empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty"],
    ["empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty"],
    ["empty", "empty", "empty", "black", "white", "empty", "empty", "empty"],
    ["empty", "empty", "empty", "white", "black", "empty", "empty", "empty"],
    ["empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty"],
    ["empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty"],
    ["empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty"],
  ]);

  useEffect(() => {
    const newBoardWithAvailableChip = board.map((line, l) => {
      return line.map((column, c) => {
        if (column === "empty") {
          if (currentPlayer === "black") {
            if (
              l === 2 &&
              c === 4 &&
              board[l + 1][c] === "white" &&
              board[l + 2][c] === "black"
            ) {
              return "available";
            }
            if (
              l === 5 &&
              c === 3 &&
              board[l - 1][c] === "white" &&
              board[l - 2][c] === "black"
            ) {
              return "available";
            }
            if (
              l === 4 &&
              c === 2 &&
              board[l][c + 1] === "white" &&
              board[l][c + 2] === "black"
            ) {
              return "available";
            }
            if (
              (l === 3) & (c === 5) &&
              board[l][c - 1] === "white" &&
              board[l][c - 2] === "black"
            ) {
              return "available";
            }
          }
          if (currentPlayer === "white") {
            if (
              l === 2 &&
              c === 3 &&
              board[l + 1][c] === "black" &&
              board[l + 2][c] === "white"
            ) {
              return "available";
            }
            if (
              l === 5 &&
              c === 4 &&
              board[l - 1][c] === "black" &&
              board[l - 2][c] === "white"
            ) {
              return "available";
            }
            if (
              l === 4 &&
              c === 5 &&
              board[l][c - 1] === "black" &&
              board[l][c - 2] === "white"
            ) {
              return "available";
            }

            if (
              l === 3 &&
              c === 2 &&
              board[l][c + 1] === "black" &&
              board[l][c + 2] === "white"
            ) {
              return "available";
            }
          }
        }
        return column;
      });
    });
    setBoard(newBoardWithAvailableChip);
  }, [currentPlayer]);

  return (
    <ul data-testid="board" className="board">
      {board.map((line, l) => (
        <li className="board__line" key={`line-${l}`} data-testid={`line-${l}`}>
          <ul className="board__squares">
            {line.map((square, c) => (
              <Square
                key={`line-${l}_column-${c}`}
                l={l}
                c={c}
                type={square}
                board={board}
                currentPlayer={currentPlayer}
                setCurrentPlayer={setCurrentPlayer}
                setBoard={setBoard}
              />
            ))}
          </ul>
        </li>
      ))}
    </ul>
  );
};

Board.propTypes = {
  currentPlayer: PropTypes.string.isRequired,
  setCurrentPlayer: PropTypes.func.isRequired,
};

export default Board;
