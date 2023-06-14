import { useState } from "react";
import "./App.css";

function App() {
  const [totalPoints, setPoints] = useState(1);
  const [currentScore, setScore] = useState(0);

  function updateScore() {
      setScore(currentScore + totalPoints);
  }

  function updatePoints() {
      if (currentScore >= 10) {
          setScore(currentScore - 10);
          setPoints(totalPoints + 1);
      } else {
          window.alert("You can't afford that!");
      }
  }

  function resetScore() {
      setScore(0);
      setPoints(1);
  }
   return (
    <main>
    {currentScore < 100 ? (
        <div>
            <h1>Current Score: {currentScore}</h1>
            <p>
                <button onClick={updateScore}>+{totalPoints}</button>
            </p>
            <p>
                <button onClick={updatePoints}>
                    Pay 10 points to change from +{totalPoints} to +
                    {totalPoints + 1}
                </button>
            </p>
        </div>
    ) : (
        <div>
            <h2>You Win!</h2>
            <p>
                <button onClick={resetScore}>Play again?</button>
            </p>
        </div>
    )}
</main>
  );
}

export default App;
