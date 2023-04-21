import React from "react";
import {useState} from "react";
import "./App.css";

function App () {
  
  const [currentScore, setCurrentScore] = useState(0);
  const [i, set_i] = useState(1)
  const [j, set_j] = useState(2)
  
  const [button_Plus10, setbutton_Plus10] = useState(`Pay 10 points to change from +${i} to +${j}`);
  const [button_Plus1, setbutton_Plus1] = useState(1);
  const [shoulIncrease, setshoulIncrease] = useState(true);
  

  function increaseBy1() {
    if(shoulIncrease){
      setCurrentScore(currentScore + 1)  
    }
    else{
      setCurrentScore(currentScore + button_Plus1)
    }
  }
 
  function playAgain(){
    set_i(i);
    set_j(j);
    setCurrentScore(0);
    setbutton_Plus1(1);
    setbutton_Plus10(`Pay 10 points to change from +${i} to +${j}`);
    
  }
  
  const pay10ToIncrease = () =>{
  
    if(currentScore <10){
      alert("You can't afford that!")
    }
    else{
     
      setCurrentScore(currentScore-10);
      setbutton_Plus10(`Pay 5 points to change from +${i+1} to +${j+1} `)
      setbutton_Plus1(button_Plus1+1)
      set_i(i+1)
      set_j(j+1)
      setshoulIncrease(false)
      
    }
    
  }
    return (
      <main>
        <p>React State Lab</p>
        <p>Current Score: {currentScore}</p>
        {currentScore<100?<button onClick={increaseBy1}>+{button_Plus1}</button>:null}
        {currentScore<100?<button onClick={pay10ToIncrease}>{button_Plus10}</button>:null}
        {currentScore>=100 ? <><h2>You Win!</h2> <button onClick={playAgain}>Play again?</button></>:null}
      </main>
    );
}

export default App;
