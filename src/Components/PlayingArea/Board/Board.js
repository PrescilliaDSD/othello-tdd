import React, { useState } from "react";
import classNames from "classnames";
import "./Board.scss";

const Board = () => {
  const [board, setBoard] = useState([
    [1, 2, 3, 4, 5, 6, 7, 8],
    [1, 2, 3, 4, 5, 6, 7, 8],
    [1, 2, 3, 4, 5, 6, 7, 8],
    [1, 2, 3, 4, 5, 6, 7, 8],
    [1, 2, 3, 4, 5, 6, 7, 8],
    [1, 2, 3, 4, 5, 6, 7, 8],
    [1, 2, 3, 4, 5, 6, 7, 8],
    [1, 2, 3, 4, 5, 6, 7, 8]
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
                    "contains-black-chip":
                      (l === 3 && c === 3) || (l === 4 && c === 4)
                  },
                  {
                    "contains-white-chip":
                      (l === 4 && c === 3) || (l === 3 && c === 4)
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
