import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import {
  startingBoard,
  checkIfASquareIsAvailable,
} from "../../../utils/gameRules";
import Square from "./Square";
import "./Board.scss";

const Board = ({ currentPlayer, setCurrentPlayer }) => {
  const [board, setBoard] = useState(startingBoard);

  useEffect(() => {
    checkIfASquareIsAvailable(board, currentPlayer, setBoard);
  }, [currentPlayer]);

  return (
    <ul data-testid="board" className="board">
      {board.map((line, lineIndex) => (
        <li
          className="board__line"
          key={`line-${lineIndex}`}
          data-testid={`line-${lineIndex}`}
        >
          <ul className="board__squares">
            {line.map((square, columnIndex) => (
              <Square
                key={`line-${lineIndex}_column-${columnIndex}`}
                squareLineIndex={lineIndex}
                squareColumnIndex={columnIndex}
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
