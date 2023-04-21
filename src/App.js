import React, { useState } from "react";
import "./App.css";

function App() {
  const [score, setScore] = useState(0);
  const [incrementor, setIncrementor] = useState(1);

  const click = () => {
    setScore(score + incrementor);
  };

  const upgrade = () => {
    if (score >= 10) {
      setScore(score - 10);
      setIncrementor(incrementor + 1);
    } else {
      alert("You can't afford that!");
    }
  };

  const handleRestartClick = () => {
    setScore(0);
    setIncrementor(1);
  };

  return (
    <div>
      <h1>Clicker Game</h1>
      <h2>Current Score: {score}</h2>
      {score < 100 && (
        <div>
          <button onClick={click}>+{incrementor}</button>
          <br />
          <button onClick={upgrade}>
            Pay 10 points to change from +{incrementor} to +{incrementor + 1}
          </button>
        </div>
      )}
      {score >= 100 && (
        <div>
          <h2>You Win!</h2>
          <button onClick={handleRestartClick}>Play again?</button>
        </div>
      )}
    </div>
  );
}

export default App;
