import React from "react";
import PropTypes from "prop-types";
import "./AsideBoard.scss";

const AsideBoard = ({ currentPlayer }) => (
  <div className="aside-board">
    <div
      data-testid="aside-chip"
      className={`${currentPlayer}-chip chip`}
    ></div>
    <button
      className="aside-board__pass-button"
      type="button"
      data-testid="pass-button"
    >
      passez
    </button>
  </div>
);

AsideBoard.propTypes = {
  currentPlayer: PropTypes.string.isRequired
};

export default AsideBoard;
