import React, { useState } from "react";
import "./App.css";

function App () {
    const hiddenStyle = {
      visibility: "hidden"
    }

    const visibleStyle = {
      visibility: "visible"
    }

    let [count, setCount] = useState(0)
    let [points, setPoints] = useState(0)
    let [multiplier, setMultiplier] = useState(1)
    let [hidden, setHidden] = useState(hiddenStyle)
    let [visible, setVisible] = useState(visibleStyle)

    function increaseCount() {
      setCount(count + multiplier)
    }

    function increaseMultiplier() {
      setMultiplier(multiplier + 1)
    }

    function increasePoints() {
      setPoints(points + 1)
    }

    function spendPoints() {
      setPoints(points - 10)
    }

    function alertMessage() {
      alert("You can't afford that!")
    }

    return (
      <>
      <div>
        <p>React State Lab</p>
        <main>
          <p className="score">Current Score: {count}</p>
        </main>
          <button onClick={() => {
            increaseCount()
            increasePoints()

            if ((count + multiplier) >= 100) {
              setHidden(visibleStyle)
            }
        
            if ((count + multiplier) >= 100) {
              setVisible(hiddenStyle)
            }
          }} style={visible}>+{`${multiplier}`}</button>

          <button onClick={() => {
            if (points >= 10) {
              spendPoints()
              increaseMultiplier()
            } else {
              alertMessage()
            }
          }} style={visible}>Pay 10 points to change from +{`${multiplier}`} to +{`${multiplier + 1}`}</button>

          <section className="victory" style={hidden}>
            <h2>You Win!</h2>
            <button onClick={() => {
              setPoints(0)
              setCount(0)
              setMultiplier(1)

              setVisible(visibleStyle)

              setHidden(hiddenStyle)
            }}>Play again?</button>
          </section>
      </div> 
      </>
    );
}

export default App;
