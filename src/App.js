import React, { useState } from "react";
import "./App.css";

import ContinuePlaying from "./continue";
import Win from "./win";

function App () {
  const [score, setScore] = useState(0);
    
  const [increment, setIncrement] = useState(1);
  
  function updateScore() {
    setScore(score + increment);
  }
  
  function increaseIncrementer() {
    if(score < 10) {
      alert("You can't afford that!");
    } else {
      setScore(score - 10);
      setIncrement(increment + 1);
    }
  }

  
  return (
      <main>
        {/* <h1>Current Score: {score}</h1>
        <button onClick={updateScore}>+{increment}</button>
        < br />
        < br/>
        <button onClick={increaseIncrementer}>Pay 10 points to change from +{increment} to +{increment + 1}</button>


        <h2>You Win!</h2>
        <button>Play Again?</button> */}

        
        {score < 100 ? (
          <ContinuePlaying 
          score={score}
          increment={increment}
          updateScore={updateScore}
          increaseIncrementer={increaseIncrementer}
          />
        ) : (
          <Win 
          setScore={ setScore }
          setIncrement={ setIncrement }/>
        )}
        
        
        
        {/* <ContinuePlaying 
        score={score}
        increment={increment}
        updateScore={updateScore}
        increaseIncrementer={increaseIncrementer}
        /> */}
      </main>
    );
}

export default App;
