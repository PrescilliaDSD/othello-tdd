import React from "react";
import PropTypes from "prop-types";
import Chip from "../Chip/Chip";

const Square = ({ line, column, type, addChip }) => (
  <li
    data-testid={`square-l${line}c${column}`}
    className={`board__square contains-${type}-chip`}
    key={`square-${column}`}
    onClick={addChip(line, column)}
  >
    <Chip color={type} />
  </li>
);

Square.propTypes = {
  line: PropTypes.number.isRequired,
  column: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired,
  addChip: PropTypes.func.isRequired
};

export default Square;
