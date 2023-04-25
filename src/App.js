import React, { useState }from "react";
import "./App.css";

function App () {
  const [counting, setCounting] = useState(0);
  const [increase, setincrease] = useState(1);

  function updateCurrentScore() {
    setCounting(counting + increase);
  }

  function updateIncrease() {
    //if (counting < 10) return alert("You can't afford that!");
    if (counting >= 10) {
      // remove 10 points
      setCounting(counting - 10);
      // set increment
      setincrease(increase + 1);
    } else {
      alert("You can't afford that!");
    }
  }

  function reset() {
    setCounting(0);
    setincrease(1);
  }

    return (
      <main>

        {counting < 100 ? (
      <>
        <h1>Current Score: {counting}</h1>
        <button onClick={updateCurrentScore}>+{increase}</button>
        <button onClick={updateIncrease}>Pay 10 points to change from +{increase} to +{increase + 1}</button>
      </>
      ) : (
      <>
        
        <h2>You Win!</h2>
        <button onClick={reset}>Play again?</button>
        </>
      )}
      </main>
    );
}

export default App;
