import React, { useState } from "react";
import "./App.css";

function App() {
  const [counter, setCount] = useState(0);
  const [increase, setIncrease] = useState(1);
  const [cost, setCost] = useState(1);
  //const [isSeen, setVisible] = useState("hidden");
  const [initialSeen, setInitial] = useState("");
  const [currentHide, setHide] = useState("hidden");

  function increment() {
    checkWin();
    setCount(counter + increase);
  }
  function changeCost() {
    if (counter >= cost) {
      setCount(counter - increase); // Subtracts the cost from the current score
      setIncrease(increase + cost); //Changes the increment by new value
      setCost(cost + 1); // increases the cost by 1
    } else {
      alert("You can't affor this");
    }
  }
  function checkWin() {
    if (counter >= 100) {
      //end game
      //console.log("You've won");
      setInitial("hidden");
      setHide("");
      //changeVisible();
    }
  }
  // function changeVisible() {
  //   const targetLocal = document.querySelector("main");
  //   const targetChildArr = targetLocal.childNodes;

  //   targetChildArr.forEach((element) => {
  //     const targetClass = element.className;
  //     toggleVisible(targetClass);
  //     console.log(element.className);
  //   });
  // }
  function resetStates() {
    setCount(0);
    setIncrease(1);
    setCost(1);
    setInitial("");
    setHide("hidden");
  }

  // function toggleVisible(Class) {
  //   if (Class === "") {
  //     this.setVisible("hidden");
  //   } else {
  //     this.setVisible("");
  //   }
  // }
  return (
    <main>
      <h1>Current Score: {counter} </h1>

      {/* <p>React State Lab</p> */}
      <button onClick={increment} className={initialSeen}>
        +{increase}
      </button>
      <button onClick={changeCost} className={initialSeen}>
        Pay {cost} points to change from +{increase} to +{increase + 1}
      </button>

      <h2 className={currentHide}>YOU WIN !</h2>
      <button onClick={resetStates} className={currentHide}>
        Play Again
      </button>
    </main>
  );
}

export default App;
