// function with props - onClick, value
// return value

export default function Square({ onClick, value }) {
  return (
    <>
      <button onClick={onClick}>{value}</button>
    </>
  );
}
