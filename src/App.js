import React, { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [click, setClick] = useState(1);
  //const [win, setWin] = useState(false);

  function addScore() {
    setCount(count + click);
  }

  function newClick() {
    if (count < 10) {
      alert("You can't afford that!");
    } else if (count >= 10) {
      setCount(count - 10);
      setClick(click + 1);
    }
  }
  // function winScreen() {
  //   if (count >= 100) {
  //     return (
  //       <>
  //         <h2>You Win!</h2>
  //         <button>Play again?</button>
  //       </>
  //     );
  //   }
  // }
  function reset() {
    setCount(count - count);
    setClick(click - (click - 1))
  }

  return (
    <main>
      {count >= 100 ? (
        <>
          <h2>You Win!</h2>
          <button onClick={reset}>Play again?</button>
        </>
      ) : (
        <>
          <h1>Current Score: {count}</h1>

          <button onClick={() => addScore()}>+{click}</button>
          <button onClick={newClick}>
            Pay 10 points to change from +{click} to +{click + 1}
          </button>
        </>
      )}
    </main>
  );
}

export default App;
/**<button onClick={newClick}>Pay 10 points to change from +1 to +2</button>  */
