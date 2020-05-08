import React, { useState } from "react";
import PropTypes from "prop-types";
import { useDrop } from "react-dnd";
import Chip from "../Chip/Chip";
import { ItemTypes } from "../../../utils/dnd";
import "./Square.scss";

const Square = ({
  l,
  c,
  type,
  board,
  currentPlayer,
  setCurrentPlayer,
  setBoard,
}) => {
  const addChip = (l, c) => {
    const newBoard = board.map((line, lineIndex) => {
      return line.map((column, columnIndex) => {
        if (l === lineIndex && c === columnIndex) {
          return currentPlayer;
        }
        return column;
      });
    });
    turningChips(l, c, newBoard);
    setCurrentPlayer(currentPlayer === "black" ? "white" : "black");
  };

  const turningChips = (l, c, board) => {
    const newBoard = board.map((line, lineIndex) => {
      return line.map((column, columnIndex) => {
        if (currentPlayer === "black") {
          if (
            board[l][c - 1] === "white" &&
            l === lineIndex &&
            c - 1 === columnIndex &&
            board[l][c - 2] === "black"
          ) {
            return "black";
          }
          if (
            board[l][c + 1] === "white" &&
            l === lineIndex &&
            c + 1 === columnIndex &&
            board[l][c + 2] === "black"
          ) {
            return "black";
          }
          if (
            board[l + 1][c] === "white" &&
            l + 1 === lineIndex &&
            c === columnIndex &&
            board[l + 2][c] === "black"
          ) {
            return "black";
          }
          if (
            board[l - 1][c] === "white" &&
            l - 1 === lineIndex &&
            c === columnIndex &&
            board[l - 2][c] === "black"
          ) {
            return "black";
          }
        }
        if (currentPlayer === "white") {
          if (
            board[l][c - 1] === "black" &&
            l === lineIndex &&
            c - 1 === columnIndex &&
            board[l][c - 2] === "white"
          ) {
            return "white";
          }
          if (
            board[l][c + 1] === "black" &&
            l === lineIndex &&
            c + 1 === columnIndex &&
            board[l][c + 2] === "white"
          ) {
            return "white";
          }
          if (
            board[l + 1][c] === "black" &&
            l + 1 === lineIndex &&
            c === columnIndex &&
            board[l + 2][c] === "white"
          ) {
            return "white";
          }
          if (
            board[l - 1][c] === "black" &&
            l - 1 === lineIndex &&
            c === columnIndex &&
            board[l - 2][c] === "white"
          ) {
            return "white";
          }
        }
        return column;
      });
    });
    setBoard(newBoard);
  };

  const [, drop] = useDrop({
    accept: ItemTypes.ASIDE_CHIP,
    drop: () => addChip(l, c),
    collect: (mon) => ({
      isOver: !!mon.isOver(),
      canDrop: !!mon.canDrop(),
    }),
  });

  return (
    <>
      {type === "available" && (
        <li
          data-testid={`square-l${l}c${c}`}
          className={`square square__available contains-${type}-chip`}
          key={`square-${c}`}
          ref={drop}
          onClick={() => addChip(l, c)}
        >
          <Chip color={type} />
        </li>
      )}
      {type !== "available" && (
        <li
          data-testid={`square-l${l}c${c}`}
          className={`square contains-${type}-chip`}
          key={`square-${c}`}
        >
          {(type === "black" || type === "white") && <Chip color={type} />}
        </li>
      )}
    </>
  );
};

Square.propTypes = {
  l: PropTypes.number.isRequired,
  c: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired,
  board: PropTypes.array.isRequired,
  currentPlayer: PropTypes.string.isRequired,
  setCurrentPlayer: PropTypes.func.isRequired,
  setBoard: PropTypes.func.isRequired,
};

export default Square;
