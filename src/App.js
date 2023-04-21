import React, { useState } from "react";
import "./App.css";

function App() {
  const [score, setScore] = useState(0);
  const [addNum, setAddNum] = useState(1);

  function scoreAdd() {
    console.log("hello");
    setScore(score + addNum);
  }

  function plusNumScore() {
    console.log("hello");
    if (score >= 10) {
      setScore(score - 10);
      setAddNum(addNum + 1);
    } else {
      alert("You can't afford that!");
    }
  }

  function reset() {
    setScore(0);
    setAddNum(1);
  }

  function CurrentGame() {
    return (
      <>
        <p>Current Score: {score}</p>
        <button onClick={scoreAdd}>+{addNum}</button>

        <button onClick={plusNumScore}>
          Pay 10 points to change from +{addNum} to +{addNum + 1}
        </button>
      </>
    );
  }

  function SuccessGame() {
    return (
      <>
        <h2>You Win!</h2>
        <button onClick={reset}>Play again?</button>
      </>
    );
  }

  return <main>{score < 100 ? <CurrentGame /> : <SuccessGame />}</main>;
}

export default App;
