import React from "react";
import "./AsideBoard.scss";

const AsideBoard = () => (
  <div className="aside-board">
    <div data-testid="aside-chip" className="black-chip"></div>
    <button
      className="aside-board__pass-button"
      type="button"
      data-testid="pass-button"
    >
      passez
    </button>
  </div>
);

export default AsideBoard;
