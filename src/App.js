import React, { useState } from "react";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(0);
  const [increase, setIncrease] = useState(1);
  //const [counterTracker, setCounterTracker] = useState(counter);

  function increaseBy() {
    setCounter(counter + increase);
  }

  function increaseByTen() {
    if (counter >= 10) {
      setCounter(counter - 10);
      setIncrease(increase + 1);
    } else {
      alert("You can't afford that!");
    }
  }
  function overHundred() {
    if (counter >= 100) {
      <div>
        <h2>You Win!</h2>
      </div>;
    }
  }
  // function resetButton() {
  //   setCounter(counter - counter);
  // }

  return (
    <main>
      <div>
        <button onClick={() => increaseBy(increase)}>+{increase}</button>
        <button onClick={() => increaseByTen()}>
          Pay 10 points to change from +{increase} to +{increase + 1}
        </button>
        <p>Current Score: {counter}</p>
        <div>{overHundred()}</div>
      </div>
      <div>
        <button onClick="">Play again?</button>
      </div>
    </main>
  );
}

export default App;
