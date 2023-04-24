import React from "react";
import "./App.css";
import { useState } from "react";

function App() {
  const [currentScore, setCurrentScore] = useState(0);

  function changeScore() {
    if (currentScore >= 10) {
      setCurrentScore(currentScore + 2);
    } else if (currentScore >= 25) {
      setCurrentScore(currentScore + 5);
    } else {
      setCurrentScore(currentScore + 1);
    }
  }
  return (
    <>
      <main>
        <p>Current Score:{currentScore} </p>
        <button onClick={() => changeScore()}>
          {currentScore >= 25 ? "+5" : currentScore >= 10 ? "+2" : "+1"}
        </button>
      </main>
    </>
  );
}

export default App;
