import React, { useState } from "react";
import button from "./button";
import "./App.css";

function App () {
  const [count, setCount] = useState(0)
  const [increase, setIncrease] = useState(1)


  function countClicker() {
    setCount(count + increase)
  }

  function spendTen() {

    if (count < 10) {
      return alert("You can't afford that!")
    } else {
      setCount(count - 10)
      setIncrease(increase + 1)
    }
  }

    return (
      <main>
        {count < 100 ? (
        <>
      <div className="App" style={{textAlign: "center"}}>
        <p>Current Score: {count}</p>
         <button onClick={countClicker}>+{increase}</button>
         <button onClick={spendTen}>Pay 10 points to change from {increase} to {increase + 1}</button>
      </div>
      </>
        ) : (
      <>
      <h2>You win!</h2>
      <button onClick={{}=false}>Play Again!</button>
      </>
      )} 
      </main>
    );
}

export default App;
