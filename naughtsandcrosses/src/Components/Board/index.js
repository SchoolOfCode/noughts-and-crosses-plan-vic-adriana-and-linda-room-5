// creating component Board with
//  - props (make a move, board)
//  - renders square
import Square from "../Square/index";

export default function Board({ onClick, gameState }) {
  return (
    <>
      <div>
        <Square />
        <Square />
        <Square />
      </div>
      <div>
        <Square />
        <Square />
        <Square />
      </div>
      <div>
        <Square />
        <Square />
        <Square />
      </div>
    </>
  );
}
