//array will be a Board
import "./App.css";
import Square from "../Square";
import { useState } from "react";
import Board from "../Board";

function App() {
  const [game, setGame] = useState([
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
  ]);

  const [isPlayerX, setIsPlayerX] = useState(true);

  return (
    <div className="App">
      <Square value="test"></Square>
      <Board></Board>
    </div>
  );
}

export default App;
