import React from "react";
import react, {useState} from "react"
import "./App.css";

function App () {

  const [score, setScore] = useState(0);
  const [points, setpoints] = useState(1);


  function incrementByOne() {
    setScore(score + points)
  };

  function gamePoints() {
    if (score >= 10){
      setpoints(points + 1);
      setScore(score - 10);
    } else {
      alert("You can't afford that!");
    }
  }

function resetScore(){
  setScore(0);
  setpoints(1);
}


return (
  <main> 
    
    { score < 100 ? (
      <>
        <p>Current Score: {score}</p>
         <button onClick={incrementByOne}>+{points}</button>
        <button onClick={gamePoints}>Pay 10 points to change from +{points} to +{points + 1}</button>
      </>
      
      ) : (
      <>
        <h2>You Win!</h2>
        <button onClick={resetScore}>Play again?</button>
      </>
      )
        }
        
      
   </main>
    );
}

export default App;
