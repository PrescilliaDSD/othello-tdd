import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import {
  startingBoard,
  checkIfASquareIsAvailable,
  turningChipAfterAPlayerAddedOne,
} from "../../../utils/gameRules";
import Square from "./Square";
import "./Board.scss";

const Board = ({ currentPlayer, setCurrentPlayer, opponent, setOpponent }) => {
  const [board, setBoard] = useState(startingBoard);

  useEffect(() => {
    checkIfASquareIsAvailable(board, currentPlayer, setBoard, opponent);
  }, [currentPlayer]);

  const addChipOnTheBoard = (squareLineIndex, squareColumnIndex) => {
    const newBoard = board.map((line, lineIndex) => {
      return line.map((square, columnIndex) => {
        if (
          squareLineIndex === lineIndex &&
          squareColumnIndex === columnIndex
        ) {
          return currentPlayer;
        }
        return square;
      });
    });

    // turningChipAfterAPlayerAddedOne(
    //   squareLineIndex,
    //   squareColumnIndex,
    //   currentPlayer,
    //   opponent,
    //   newBoard,
    //   setBoard
    // );

    setCurrentPlayer(currentPlayer === "black" ? "white" : "black");
    setOpponent(opponent === "black" ? "white" : "black");
  };

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
                addChipOnTheBoard={addChipOnTheBoard}
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
  opponent: PropTypes.string.isRequired,
  setOpponent: PropTypes.func.isRequired,
};

export default Board;
