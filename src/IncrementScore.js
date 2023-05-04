// // scoreFunctions.js

// export function incrementScore(currentScore, incrementValue) {
//     return currentScore + incrementValue;
//   }
  
//   export function increaseIncrementValue(currentScore, incrementValue) {
//     if (currentScore >= 10) {
//       return { newScore: currentScore - 10, newIncrementValue: incrementValue + 1 };
//     } else {
//       return null;
//     }
//   }
  
  // IncrementScore.js
import React, { useState } from "react";
import { incrementScore, increaseIncrementValue } from "./scoreFunctions";
import "./IncrementScore.css";

function IncrementScore() {
  const [currentScore, setCurrentScore] = useState(0);
  const [incrementValue, setIncrementValue] = useState(1);

  function handleScoreClick() {
    setCurrentScore(incrementScore(currentScore, incrementValue));
  }

  function handleIncrementValueClick() {
    const result = increaseIncrementValue(currentScore, incrementValue);
    if (result) {
      setCurrentScore(result.newScore);
      setIncrementValue(result.newIncrementValue);
    } else {
      return window.alert("You can't afford that!");
    }
  }

  const winMessageStyles = {
    display: currentScore >= 100 ? "block" : "none",
  };

  return (
    <main>
      <h1>Current Score: {currentScore}</h1>
      <button onClick={handleScoreClick}>+{incrementValue}</button>
      <button onClick={handleIncrementValueClick}>
        Pay 10 points to change from +{incrementValue} to +{incrementValue + 1}
      </button>
      <h2 style={winMessageStyles}>You win!</h2>
    </main>
  );
}

export default IncrementScore;
