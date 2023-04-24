import React from "react";
import { useState } from "react";
import "./App.css";

function App () {

  const [currentScore, setcurrentScore] = useState(0)
  const [increase, setIncrease] = useState(1)

  function handleCounterAddOne(){
    setcurrentScore(currentScore + increase)

  }
  function handleIncrease(){
    if(currentScore >= 10){
      setIncrease(increase + 1)
      setcurrentScore(currentScore - 10)

    }
    else{
      alert("You can't afford that!")
    }
    
    

  }
    return (
      <main>
        <p>React State Lab</p>
        <h1>Counter Score: {currentScore}</h1>
        <button onClick={handleCounterAddOne}>+{increase}</button>
        <button onClick={handleIncrease}>Pay 10 points to change from +{increase} to +{increase + 1}</button>
        
      </main>
    );
}

export default App;
