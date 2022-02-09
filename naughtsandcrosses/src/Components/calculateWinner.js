export function calculateWinner(squares) {
  const lines = [
    [0, 1, 2], // x,x,o //top row
    [3, 4, 5], //middle row
    [6, 7, 8], //bottom row
    [0, 3, 6], //....etc
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] === null) {
      return;
    }
    if (squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}
