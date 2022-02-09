// creating component Board with
//  - props (make a move, board)
//  - renders square
import Square from "../Square/index";

export default function Board({ squares, onSelectSquare }) {
  return (
    <div>
      {squares.map((square, index) => (
        <Square
          key={index}
          value={square}
          onClick={() => onSelectSquare(index)}
        />
      ))}
    </div>
  );
}
