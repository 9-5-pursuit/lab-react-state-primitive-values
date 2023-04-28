import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [count, setCount] = useState(0); //changes state for count
  const [Increment, setIncrement] = useState(1); //changes state for increment

  const upgradeIncrement = () => {
    //upgrades +1 for 10 points or lets user know they dont have enough points
    if (count >= 10) {
      setCount(count - 10);
      setIncrement(Increment + 1);
    } else if (count < 10) {
      alert("You can't afford that!");
    }
  };
  const addCount = () => {
    // increments the count up
    setCount(count + Increment);
  };

  const reset = () => {
    // resets the count and increment upgrader
    setCount(0);
    setIncrement(1);
  };

  return (
    <main>
      {count < 100 ? (
        <>
          <p>React State Lab</p>
          <h1>Current Score: {count}</h1>
          <button className="play" onClick={() => addCount()}>
            +{Increment}
          </button>
          &nbsp; &nbsp;
          <button className="upgrade" onClick={() => upgradeIncrement()}>
            Pay 10 points to change from +{Increment} to +{Increment + 1}
          </button>
        </>
      ) : (
        <>
          <h2>'You Win!'</h2>
          <button onClick={reset}>Play again?</button>
        </>
      )}
    </main>
  );
};

export default App;
