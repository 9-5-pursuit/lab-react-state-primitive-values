import React from "react";
import react, { useState } from "react"
import "./App.css";

function App () {

  const [counter, setCounter ] = useState(0);
  const [ pts, setPts ] = useState(1);
  const winValue = 100;

  function increaseByPoints() {
    setCounter(counter + pts);
  }

  function points() {
    const minumumPtsToBuy = 10;
    const plusOne = 1;
    if (counter >= minumumPtsToBuy) {
    setCounter(counter - minumumPtsToBuy);
    setPts(pts + plusOne);
    }
    else {
      alert(`You can't afford that!`);
    }
  }

  function playAgain() {
    setCounter(0);
    setPts(1);
  }

    return (
      <main>
        {counter < winValue ? (<>
        <p>Current Score: {counter}</p>
        <button onClick={increaseByPoints}>+{pts}</button>
        <button onClick={points}>Pay 10 points to change from +{pts} to +{pts +1}</button>
        </>
        ) : (
        <>
        <h2>You Win!</h2>
        <button onClick={playAgain}>Play again?</button>
        </>)}
      </main>
    );
}

export default App;
