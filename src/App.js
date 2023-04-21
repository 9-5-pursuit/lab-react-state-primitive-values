import React, { useState } from "react";
import "./App.css";

function App() {
  const [score, setScore] = useState(0);
  const [point, setPoint] = useState(1);

  function updateScoreNum() {
    setScore(score + point);
    // score will increase by how many points will increase
  }

  function updatePointNum() {
    if (score >= 10) {
      setScore(score - 10);
      setPoint(point + 1);
    } else {
      alert("You can't afford that!");
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
          <button onClick={updateScoreNum}>+{point}</button>
          <button onClick={updatePointNum}>
            Pay 10 points to change from +{point} to +{point + 1}
          </button>
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
