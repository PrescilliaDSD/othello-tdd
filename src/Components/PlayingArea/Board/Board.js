import React, { useState } from "react";
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
