import React from "react";
import PropTypes from "prop-types";

import AsideChip from "./AsideChip";
import "./AsideBoard.scss";

const AsideBoard = ({ currentPlayer }) => {
  return (
    <div className="aside-board">
      <AsideChip color={currentPlayer} />
      <button
        className="aside-board__pass-button"
        type="button"
        data-testid="pass-button"
      >
        passez
      </button>
    </div>
  );
};

AsideBoard.propTypes = {
  currentPlayer: PropTypes.string.isRequired
};

export default AsideBoard;
