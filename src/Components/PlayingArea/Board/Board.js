import React, { useState } from "react";
import classNames from "classnames";
import "./Board.scss";

const Board = () => {
  const [board, setBoard] = useState([
    ["empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty"],
    ["empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty"],
    ["empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty"],
    ["empty", "empty", "empty", "black", "white", "empty", "empty", "empty"],
    ["empty", "empty", "empty", "white", "black", "empty", "empty", "empty"],
    ["empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty"],
    ["empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty"],
    ["empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty"]
  ]);

  return (
    <ul data-testid="board" className="board">
      {board.map((line, l) => (
        <li className="board__line" key={`line-${l}`} data-testid={`line-${l}`}>
          <ul className="board__squares">
            {line.map((square, c) => (
              <li
                data-testid={`square-l${l}c${c}`}
                className={classNames(
                  "board__square",
                  {
                    "contains-black-chip": square === "black"
                  },
                  {
                    "contains-white-chip": square === "white"
                  }
                )}
                key={`square-${c}`}
              ></li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  );
};

export default Board;
