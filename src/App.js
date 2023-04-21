import React from "react";
import { useState } from "react";
import "./App.css";

function App() {
  const [score, setScore] = useState(0);
  const [point, setPoint] = useState(1);

  function UpdateScorenum() {
    setScore(score + point);
  }

  function updatePointNum() {
    if (score >= 10) {
      setScore(score - 10);
      setPoint(point + 1);
    } else {
      window.alert("You can't afford that!");
    }
  }

  function resetScore() {
    setScore(0);
    setPoint(1);
  }

  return (
    <main>
      {score < 100 ? (
        <div className="score-container">
          <h1>Current Score: {score}</h1>
          <div className="increase-score-amount">
            <button onClick={UpdateScorenum}>+{point}</button>
          </div>

          <div className="increase-button-amount">
            <button onClick={updatePointNum}>
              Pay 10 points to change from +{point} to +{point + 1}
            </button>
          </div>
        </div>
      ) : (
        <div className="winning-container">
          <h2>You Win!</h2>
          <button onClick={resetScore}>Play again?</button>
        </div>
      )}
    </main>
  );
}

export default App;
