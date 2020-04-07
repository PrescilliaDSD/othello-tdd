import React from "react";
import PropTypes from "prop-types";
import { useDrop } from "react-dnd";
import Chip from "../Chip/Chip";
import { ItemTypes } from "../../../utils/dnd";

const Square = ({
  l,
  c,
  type,
  addChip,
  board,
  currentPlayer,
  setCurrentPlayer,
  setBoard
}) => {
  const [, drop] = useDrop({
    accept: ItemTypes.ASIDE_CHIP,
    drop: () => {
      const newBoard = board.map((line, lineIndex) => {
        return line.map((column, columnIndex) => {
          if (l === lineIndex && c === columnIndex) {
            return currentPlayer;
          }
          return column;
        });
      });
      setCurrentPlayer(currentPlayer === "black" ? "white" : "black");
      setBoard(newBoard);
    },
    collect: mon => ({
      isOver: !!mon.isOver(),
      canDrop: !!mon.canDrop()
    })
  });

  return (
    <li
      data-testid={`square-l${l}c${c}`}
      className={`board__square contains-${type}-chip`}
      key={`square-${c}`}
      ref={drop}
      onClick={addChip(l, c)}
    >
      {type !== "empty" && <Chip color={type} />}
    </li>
  );
};

Square.propTypes = {
  line: PropTypes.number.isRequired,
  column: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired,
  addChip: PropTypes.func.isRequired
};

export default Square;
