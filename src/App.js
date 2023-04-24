import React, {useState} from "react";
import "./App.css";


function App() {
  
  const [counting, setCounting] = useState(0);
  

   function payingPoints() {
     if (counting < 10) {
       alert("You can't afford that!");
     } else if (counting > 10) {
       setCounting(counting - 10);
     }
   }
  
    function addScore() {
      setCounting(counting + 1);
    }
 
    return (
      <main>
        <p>Current Score: {counting}</p>

        <div>
          <button className="play" onClick={() => addScore()}>
            Click me to Play
          </button>
        </div>

        <div>
          <button className="payPoints" onClick={() => payingPoints()}>
            Pay 10 points to change from +1 to +2
          </button>
        </div>


      </main>
    );
}

  export default App;
