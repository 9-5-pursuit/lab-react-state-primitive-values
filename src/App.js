import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  /* 
  // const [counter, setCount] = useState(0);
  // const [increase, setIncrease] = useState(1);
  // const [cost, setCost] = useState(1);
  // //const [isSeen, setVisible] = useState("hidden");
  // const [initialSeen, setInitial] = useState("");
  // const [currentHide, setHide] = useState("hidden");
  // function increment() {
  //   setCount(counter + increase);
  //   console.log(counter);
  //   checkWin();
  // }
  // function changeCost() {
  //   if (counter >= cost) {
  //     setCount(counter - increase); // Subtracts the cost from the current score
  //     setIncrease(increase + cost); //Changes the increment by new value
  //     setCost(cost + 1); // increases the cost by 1
  //   } else {
  //     alert("You can't afford this");
  //   }
  // }
  // function checkWin() {
  //   if (counter >= 100) {
  //     //end game
  //     //console.log("You've won");
  //     setInitial("hidden");
  //     setHide("");
  //     //changeVisible();
  //     return true;
  //   } else {
  //     return false;
  //   }
  // }
  // function resetStates() {
  //   setCount(0);
  //   setIncrease(1);
  //   setCost(1);
  //   setInitial("");
  //   setHide("hidden");
  // }
  // //----------------------------------------------------------------//
  // return (
  //   <main>
  //     <h1>Current Score: {counter} </h1>
  //    
  //     <button onClick={increment} className={initialSeen}>
  //       +{increase}
  //     </button>
  //     <button onClick={changeCost} className={initialSeen}>
  //       Pay {cost} points to change from +{increase} to +{increase + 1}
  //     </button>
  //     <h2 className={currentHide}>YOU WIN !</h2>
  //     <button onClick={resetStates} className={currentHide}>
  //       Play Again
  //     </button>
  //   </main>
  // );
  */

  const [counter, setCounter] = useState(0);
  const [hasWon, setHasWon] = useState(false);
  const [increment, setIncrement] = useState(1);
  const cost = 10;
  ///-------------------------------------------------------------------//

  function increaseCounter() {
    setCounter(counter + increment);
  }
  useEffect(() => {
    //console.log(counter);
    if (counter >= 100) {
      setHasWon(true);
    }
  }, [counter]);
  function changeIncrement() {
    if (counter >= cost) {
      setIncrement(increment + 1);
      setCounter(counter - cost);
    } else {
      alert("You can't afford that!");
    }
  }

  function resetStates() {
    setCounter(0);
    setHasWon(false);
    setIncrement(1);
  }
  return (
    <main>
      {!hasWon ? (
        <>
          <h1>Current Score: {counter} </h1>
          <button onClick={increaseCounter}>+{increment}</button>
          <button onClick={changeIncrement}>
            Pay {cost} points to change from +{increment} to +{increment + 1}
          </button>
        </>
      ) : (
        <>
          <h2>You Win!</h2>
          <button onClick={resetStates}>Play again?</button>
        </>
      )}
    </main>
  );
}

export default App;
