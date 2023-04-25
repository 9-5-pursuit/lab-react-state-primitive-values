import React, { useState } from "react";
import "./App.css";

function App() {
  const [counting, setCounting] = useState(0);
  const [increment, steIncrement] = useState(1);

  function addScore() {
    setCounting(counting + increment);
  }

  function payingPoints() {
    if (counting < 10) {
      alert("You can't afford that!");
    }
    else if (counting >= 10) {
      setCounting(counting - 10);

      steIncrement(increment + 1);
    }
  }

  function resetGame() {
    setCounting(0);
    steIncrement(1);
  }

  return (
    <main>
      {counting < 100 ? (
        <>
          <h2>Current Score: {counting}</h2>
          <button onClick={addScore}>+{increment}</button>
          <button onClick={payingPoints}>
            Pay 10 points to change from +{increment} to +{increment + 1}
          </button>
        </>
      ) : (
        <>
          <h2>'You Win!'</h2>
          <button onClick={resetGame}>Play again?</button>
        </>
      )}
    </main>
  );
}

export default App;
