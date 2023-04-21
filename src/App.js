import React, { useState } from "react";
import "./App.css";

function App() {
  const [score, setScore] = useState(0);
  const [points, setPoints] = useState(1);

  function levelUp() {
    if (score < 10) {
      alert("You can't afford that!");
      return;
    }
    setScore(score - 10);
    setPoints(points + 1);
  }

  const clickCounter = () => setScore(score + points);

  function reset() {
    setScore(0);
    setPoints(1);
  }

  let gamePlay = (
    <>
      <h1>Current Score: {score}</h1>
      <button onClick={clickCounter}>+{points}</button>
      <button onClick={levelUp}>
        Pay 10 points to change from +{points} to +{points + 1}
      </button>
    </>
  );

  let winGame = (
    <>
      <h2>You Win!</h2>
      <button onClick={reset}>Play Again?</button>
    </>
  );

  return <main>{score < 100 ? gamePlay : winGame}</main>;
}

export default App;
