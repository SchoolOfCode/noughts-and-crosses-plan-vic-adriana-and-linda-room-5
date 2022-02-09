//array will be a Board
import "./App.css";
import Square from "../Square";
import { useState } from "react";
import Board from "../Board";

function App() {
  //set state for game and player
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

//add behaviour for make a move 
//function to make a move if square is empty - return x or O
//on click insert player symbol 
//if not empty return - 'pick another square'


function playerMove(i) {
  if (game.value[i] !== null) {
    return 'pick another square'
  } else if (isPlayerX === true) {
    let newArray = [...game]
    setIsPlayerX(false)
  }
  
  function playerMove(index) {
    let newArray = [...oldArray]
    newArray[index] = turn //X or O based on turn
    setArray([...newArray])
    }


  }
}

  return (
    <div className="App">
     
      <Board></Board>
    </div>
  );


export default App;
