//array will be a Board
import "./App.css";
import Square from "../Square";
import { useState } from "react";
import Board from "../Board";

function App() {
  //set state for game and player
  const [board, setBoard] = useState(Array(9).fill(null));
  // set the state for the player
  const [isPlayerX, setIsPlayerX] = useState(true);
  //  declare the winner
  //const winner = calculateWinner(board);
  // declare the current Player
  const currentPlayer = isPlayerX ? "X" : "O";

  function handleSquareClick(index) {
    if (board[index]) {
      return;
    } else {
      setBoard([
        ...board.slice(0, index),
        currentPlayer,
        ...board.slice(index + 1),
      ]);

      setIsPlayerX(!isPlayerX);
    }
  }

  return (
    <div className="App">
      <h1>Hello</h1>
      <Board squares={board} onSelectSquare={handleSquareClick}></Board>
    </div>
  );
}

export default App;

//add behaviour for make a move
//function to make a move if square is empty - return x or O
//on click insert player symbol
//if not empty return - 'pick another square'

// function playerMove(i) {
//   if (game.value[i] !== null) {
//     return "pick another square";
//   } else if (isPlayerX === true) {
//     let newArray = [...game];
//     setIsPlayerX(false);
//   }

//   function playerMove(index) {
//     let newArray = [...oldArray];
//     newArray[index] = turn; //X or O based on turn
//     setArray([...newArray]);
//   }
// }
