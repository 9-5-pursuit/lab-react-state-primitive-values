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
    } else if (counting >= 10) {
      setCounting(counting - 10);

      steIncrement(increment + 1);
    }
  }

  function restScore() {
    setCounting(0);
    steIncrement(1);
  }

  return (
    <main>
      <h2>Current Score: {counting}</h2>

      {counting < 100 ? (
        <>
          <button className="play" onClick={() => addScore()}>
            +{increment}
          </button>
          <button className="payPoints" onClick={() => payingPoints()}>
            Pay 10 points to change from +{increment} to +{increment + 1}
          </button>
        </>
      ) : (
        <>
          <h2>You win!</h2>
          <button onClick={restScore}>Play Again</button>
        </>
      )}
    </main>
  );
}

export default App;
