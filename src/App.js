import React from "react";
import { useState } from "react";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(0);
  const [increment, setIncrement] = useState(1);

  function addCount() {
    setCounter(counter + increment);
  }

  function plusOne() {
    if (counter >= 10) {
      setIncrement(increment + 1);
      setCounter(counter - 10);
    } else {
      alert("You can't afford that!");
    }
  }

  function toggle() {
    if (counter >= 100) {
      return "active";
    } else {
      return "inactive";
    }
  }

  function toggleCounter() {
    if (counter < 100) {
      return "active";
    } else {
      return "inactive";
    }
  }

  function resetGame() {
    setCounter(0);
    setIncrement(1);
  }

  return (
    <main>
      <h2>Current Score: {counter}</h2>

      <div className={toggleCounter()}>
        <button onClick={addCount}>+{increment}</button>

        <div>
          <button onClick={plusOne}>
            Pay 10 points to change from +{increment} to +{increment + 1}
          </button>
        </div>
      </div>

      <div className={toggle()}>
        <h2>You Win!</h2>
        <button onClick={resetGame}>Play again?</button>
      </div>
    </main>
  );
}

export default App;
