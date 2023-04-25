import React, { useState } from "react";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(0);
  const [increase, setIncrease] = useState(1);

  function increaseBy() {
    setCounter(counter + increase);
  }
  function increaseByTen() {
    if (counter < 10) {
      alert("You can't afford that!");
    } else {
      setCounter(counter - 10);
      setIncrease(increase + 1);
    }
  }
  // function overHundred() {
  //   if (counter >= 100) {
  //     return (
  //       <div>
  //         <h2>You Win!</h2>
  //       </div>
  //     );
  //   }
  // }

  function reset() {
    setCounter(0);
    setIncrease(1);
  }

  return (
    <main>
      {counter < 100 ? (
        <>
          <h1>Current Score: {counter}</h1>
          <button onClick={() => increaseBy(increase)}>+{increase}</button>
          <button onClick={() => increaseByTen()}>
            Pay 10 points to change from +{increase} to +{increase + 1}
          </button>
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
