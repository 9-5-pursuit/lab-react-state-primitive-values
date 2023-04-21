import React from "react";
import { useState } from "react";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(0);
  const [points, setPoints] = useState(1);

  function incrementScore() {
    setCounter(counter + points);
  }

  function payPoints() {
    if (counter >= 10) {
      setPoints(points + 1);
      setCounter(counter - 10);
    } else {
      alert("You cannot afford that!");
    }
  }

  function resetGame() {
    setCounter(0);
    setPoints(1);
  }

  return (
    <main>
      {counter < 100 ? (
        <>
          <p> Current Score: {counter}</p>
          <button onClick={incrementScore}>+{points}</button>
          <button onClick={payPoints}>
            Pay 10 points to change from {points} to {points + 1}
          </button>
        </>
      ) : (
        <>
          <h2>You Win!</h2>
          <button onClick={resetGame}> Play again?</button>
        </>
      )}
    </main>
  );
}

export default App;
