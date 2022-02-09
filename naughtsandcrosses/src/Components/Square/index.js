// function with props - onClick, value
// return value

export default function Square({ onClick, value }) {
  // turning operator = short way to use if statement
  // const style = value?`squares ${value}`: "squares";

  return (
    <>
      <button onClick={onClick}>{value}</button>
    </>
  );
}
