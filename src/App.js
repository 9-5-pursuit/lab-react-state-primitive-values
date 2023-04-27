
import "./App.css";
 import {useState} from "react";


function App () {
   const [counter, setCounter] = useState(0);
   const [increase, setIncrease] = useState(1);
 
   function scoreUpdate(){
   
    setCounter(counter+increase) 
 
   }  
  
 
   function increment(){
     if (counter >= 10){
    setCounter(counter-10);

    setIncrease(increase+1);
    
 
  }else{
   alert("You can't afford that!");
    
    }
  }

   function reset() {
    setCounter(0);
    setIncrease(1);
   
 
}

    return (
      <main>
       {counter < 100 ? (
        <div>
          <h1>Current Score: {counter}</h1>
          <button onClick={scoreUpdate}>+{increase}</button>
          <button onClick={increment}>Pay 10 points to change from +{increase} to +{increase+1}</button>
        </div>):( 
        <>
          <h2>You Win!</h2>
          <button onClick={reset}>Play again?</button>
        </>
            
        )}  
      </main>
    );
}

export default App;
