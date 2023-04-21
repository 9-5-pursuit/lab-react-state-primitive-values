import React, { useState } from "react";

function ReadyPlayerOne() {
  // declare states
  const [score, setScore] = useState(0);
  const [plusOne, setPlusOne] = useState(1);

  // start game
  const newGame = () => {
    setScore(0);
    setPlusOne(1);
    return <ReadyPlayerOne />;
  };

  // score increment
  const addOne = () => {
    setScore(score + plusOne);
  };
  // pay 10 points
  const payTen = () => {
    if (score - 10 < 0) {
      alert("You can't afford that!");
    } else {
      setScore(score - 10);
      setPlusOne(plusOne + 1);
    }
  };
  // conditonal for if win
  if (score >= 100) {
    return (
      <>
        <h1>You Win!</h1>
        <h2>
          Score: <span>{score}</span>
        </h2>
        <button
          onClick={() => {
            newGame();
          }}
        >
          Play again?
        </button>
      </>
    );
  }

  return (
    <div>
      <h1>
        Current Score: <span>{score}</span>
      </h1>
      <button
        onClick={() => {
          addOne();
        }}
      >
        +{plusOne}
      </button>
      <button
        onClick={() => {
          payTen();
        }}
      >
        Pay 10 points to change from +{plusOne} to +{plusOne + 1}
      </button>
    </div>
  );
}

export default ReadyPlayerOne;
