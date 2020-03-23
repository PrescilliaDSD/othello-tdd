import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import PlayingArea from "./PlayingArea/PlayingArea";

const App = () => {
  return (
    <Router>
      <Route exact to="/" component={PlayingArea} />
    </Router>
  );
};

export default App;
