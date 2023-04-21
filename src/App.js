import React from "react";
import { useState } from "react";
import "./App.css";

function App () {

  const [counter, setCounter] = useState(0)
  const [increase, setIncrease] = useState(1)

  function handleCounterAddOne(){
    setCounter(counter + 1)

  }
  function handleIncrease(){
    if(counter >= 10){
      setIncrease(increase + 1)
      setCounter(counter - 10)

    }
    else{
      alert("You can't afford that!")
    }
    
    

  }
    return (
      <main>
        <p>React State Lab</p>
        <h1>Counter Score: {counter}</h1>
        <button onClick={handleCounterAddOne}>+{increase}</button>
        <button onClick={handleIncrease}>Pay 10 points to change from +{increase} to +{increase + 1}</button>
        
      </main>
    );
}

export default App;
