import React from "react";
import PropTypes from "prop-types";
import { useDrop } from "react-dnd";
import classNames from "classnames";
import Chip from "../Chip/Chip";
import { ItemTypes } from "../../../utils/dnd";
import { turningChipAfterAPlayerAddedOne } from "../../../utils/gameRules";
import "./Square.scss";

const Square = ({
  squareLineIndex,
  squareColumnIndex,
  type,
  board,
  currentPlayer,
  setCurrentPlayer,
  setBoard,
}) => {
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

    turningChipAfterAPlayerAddedOne(
      squareLineIndex,
      squareColumnIndex,
      currentPlayer,
      newBoard,
      setBoard
    );

    setCurrentPlayer(currentPlayer === "black" ? "white" : "black");
  };

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
  board: PropTypes.array.isRequired,
  currentPlayer: PropTypes.string.isRequired,
  setCurrentPlayer: PropTypes.func.isRequired,
  setBoard: PropTypes.func.isRequired,
};

export default Square;
