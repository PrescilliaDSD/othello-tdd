import React from "react";
import PropTypes from "prop-types";
import { useDrop } from "react-dnd";
import classNames from "classnames";
import Chip from "../Chip/Chip";
import { ItemTypes } from "../../../utils/dnd";
import "./Square.scss";

const Square = ({
  squareLineIndex,
  squareColumnIndex,
  type,
  addChipOnTheBoard,
}) => {
  const [, drop] = useDrop({
    accept: ItemTypes.ASIDE_CHIP,
    drop: () => addChipOnTheBoard(squareLineIndex, squareColumnIndex),
    collect: (mon) => ({
      isOver: !!mon.isOver(),
      canDrop: !!mon.canDrop(),
    }),
  });

  return (
    <li
      data-testid={`square-l${squareLineIndex}c${squareColumnIndex}`}
      className={classNames(`square contains-${type}-chip`, {
        square__available: type === "available",
      })}
      key={`square-${squareColumnIndex}`}
      ref={drop}
      onClick={
        type === "available"
          ? () => addChipOnTheBoard(squareLineIndex, squareColumnIndex)
          : () => {}
      }
    >
      <Chip color={type} />
    </li>
  );
};

Square.propTypes = {
  squareLineIndex: PropTypes.number.isRequired,
  squareColumnIndex: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired,
  addChipOnTheBoard: PropTypes.func.isRequired,
};

export default Square;
