import React, { useState } from "react";
import Board from "./Board/Board";
import AsideBoard from "./AsideBoard/AsideBoard";
import "./PlayingArea.scss";

const PlayingArea = () => {
  const [currentPlayer, setCurrentPlayer] = useState("black");

  return (
    <div className="playing-area">
      <Board
        currentPlayer={currentPlayer}
        setCurrentPlayer={setCurrentPlayer}
      />
      <AsideBoard currentPlayer={currentPlayer} />
    </div>
  );
};

export default PlayingArea;
