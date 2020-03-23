import React from "react";
import Board from "./Board/Board";
import AsideBoard from "./AsideBoard/AsideBoard";
import "./PlayingArea.scss";

const PlayingArea = () => (
  <div className="playing-area">
    <Board />
    <AsideBoard />
  </div>
);

export default PlayingArea;
