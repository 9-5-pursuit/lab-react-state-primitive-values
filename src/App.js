import React, { useState } from "react";
import button from "./button";
import "./App.css";

function App () {
  const [count, setCount] = useState(0)
  const [ten, setTen] = useState(true)

  function countClicker() {
    setCount(count + 1)
  }

  function spendTen() {

    if (count < 10) {
      alert("You can't afford that!")
    }
  }

    return (
      <div className="App" style={{textAlign: "center"}}>
        <p>Current Score: {count}</p>
         <button onClick={countClicker}>+{count}</button>
         <button onClick={spendTen}>Pay 10 points to change from +1 to +2</button>
      </div>
    );
}

export default App;
