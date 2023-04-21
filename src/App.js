import React from "react";
import "./App.css";
import {useState} from 'react'

function App () {

  function increment() {
    setCount(count + value)
  }

  const [count, setCount] = useState(0)
  const [value, setValue] = useState(1)
  const [block, setBlock] = useState(false)
    return (
      <main style={{display: 'flex', flexDirection: 'column'}}>

        {count< 100 && (
          <>
                <h1>Current Score: {count}</h1>
                <button style={{margin: '1em', width: '25%'}} onClick={()=> increment()}>+{value}</button>
                <button style={{width: '50%', margin: '1em'}} onClick={() => {if (count>=10) {setValue(value + 1); setCount(count - 10)} else {alert(`You can't afford that!`)}}}>Pay 10 points to change from +{value} to +{value + 1}</button>
                <p>React State Lab</p>
          </>
        )   
        }
        {
          count >= 100 && (
            <>
            <h1>Current Score: {count}</h1>
              <h2>You Win!</h2>
              <button style={{width: '50%'}} onClick={() => {setCount(0); setValue(1); setBlock(false)}}>Play again?</button>
            </>
          )
        }

      </main>
    );
}

export default App;
