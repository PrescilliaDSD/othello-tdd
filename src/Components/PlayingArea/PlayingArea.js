import React, { useState } from "react";
import { DndProvider } from "react-dnd";
import Backend from "react-dnd-html5-backend";
import Board from "./Board/Board";
import AsideBoard from "./AsideBoard/AsideBoard";
import "./PlayingArea.scss";

const PlayingArea = () => {
  const [currentPlayer, setCurrentPlayer] = useState("black");

  return (
    <DndProvider backend={Backend}>
      <div className="playing-area">
        <Board
          currentPlayer={currentPlayer}
          setCurrentPlayer={setCurrentPlayer}
        />
        <AsideBoard currentPlayer={currentPlayer} />
      </div>
    </DndProvider>
  );
};

export default PlayingArea;
