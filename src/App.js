import React from "react";
import "./App.css";
import { useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);
  const [accumulator, setAccumulator] = useState(1);

  function addAccumulator() {
    if (counter < 10) {
      alert(`You can't afford that!`);
      return;
    }
    setAccumulator(accumulator + 1);
    setCounter(counter - 10);
  }

  const countClick = () => setCounter(counter + accumulator);

  function resetGame() {
    setCounter(0);
    setAccumulator(1);
  }

  let gameInPlay = (
    <>
      <h1>Current Score: {counter} </h1>
      <button onClick={countClick}>+{accumulator}</button>
      <button onClick={addAccumulator}>
        Pay 10 points to change from+{accumulator} to +{accumulator + 1}
      </button>
    </>
  );

  let gameWon = (
    <div>
      <h2>You Win!</h2>
      <button onClick={resetGame}>Play Again?</button>
    </div>
  );

  return <main>{counter < 100 ? gameInPlay : gameWon}</main>;
}

export default App;
