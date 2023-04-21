import React, { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [plusOne, setPlusOne] = useState(1);

  function countAdd() {
    console.log("hello");
    setCount(count + plusOne);
  }

  function plusOneCount() {
    console.log("hello");
    if (count >= 10) {
      setCount(count - 10);
      setPlusOne(plusOne + 1);
    } else {
      alert("You can't afford that!");
    }
  }

  function reset() {
    setCount(0);
    setPlusOne(1);
  }

  function MainGame() {
    return (
      <>
        <p>Current Score: {count}</p>
        <button onClick={countAdd}>+{plusOne}</button>

        <button onClick={plusOneCount}>
          Pay 10 points to change from +{plusOne} to +{plusOne + 1}
        </button>
      </>
    );
  }

  function GameWon() {
    return (
      <>
        <h2>You Win!</h2>
        <button onClick={reset}>Play again?</button>
      </>
    );
  }

  return (
    <main>
      {/* <MainGame /> */}
      {count < 100 ? <MainGame /> : <GameWon />}
    </main>
  );
}

export default App;
