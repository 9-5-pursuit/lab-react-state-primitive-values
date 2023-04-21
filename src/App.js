import React from "react";
import "./App.css";
import { useState } from "react";

function App() {
  const [score, setScore] = useState(0);
  const [incrementor, setIncrementor] = useState(1);

  const handleIncrement = () => {
    setScore((prevScore) => prevScore + incrementor);
  };

  const handlePay = () => {
    if (score >= 10) {
      setScore((prevScore) => prevScore - 10);
      setIncrementor((prevIncrementor) => prevIncrementor + 1);
    } else {
      alert("You can't afford that!");
    }
  };

  const handleReset = () => {
    setScore(0);
    setIncrementor(1);
  };

  if (score >= 100) {
    return (
      <main>
        <p className="score-text">Current Score: {score}</p>
        <h2>You Win!</h2>
        <button onClick={handleReset}>Play again?</button>
      </main>
    );
  }

  return (
    <main>
      <h2>React State Lab</h2>
      <p className="score-text">Current Score: {score}</p>
      <div className="increment-container">
        <button className="increment-button" onClick={handleIncrement}>
          +{incrementor}
        </button>
        <button className="pay-button" onClick={handlePay}>
          Pay 10 points to change from +{incrementor} to +{incrementor + 1}
        </button>
      </div>
    </main>
  );
}

export default App;
