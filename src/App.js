import React from "react";
import "./App.css";
import { useState } from "react";

function App () {
  const [counter, setCounter] = useState(0);
  const [points, setPoints] = useState(1);
  const [upgraded, setUpgraded] = useState(false);
  
  
  function increment() {
    setCounter(counter + (upgraded ? points : 1));
  }  

  function upgradeClick() {
    if (counter >= 10) {
      setPoints(points + 1);
      setUpgraded(true);
      setCounter(counter - 10);
    } else {
      alert("You can't afford that!");
    }
  }

  function resetGame() {
    setCounter(0);
    setPoints(1);
    setUpgraded(false);
  }
  
if (counter >= 100) {
  return (
    <main>
      <h2>You Win!</h2>
      <button onClick={resetGame}>Play again?</button>
    </main>
  );

}
  return (
    <main>
      
      <div>
        <h1>Current Score: {counter}</h1>
      </div>

      <div id="incrementButton" className={counter}>
        <button onClick={increment}>{upgraded ? `+${points}` : "+1"}</button>
      </div>

      <div>
        <button onClick={upgradeClick}>
          {upgraded
            ? `Pay 10 points to change from +${points} to +${points + 1}`
            : "Pay 10 points to change from +1 to +2"}
        </button>
      </div>
    </main>
  );
}

export default App;
