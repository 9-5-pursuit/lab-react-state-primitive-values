import React from 'react'
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import Confetti from "react-confetti";

const GameOver = ({ setScore, setValue }) => {
    function resetGame() {
        setScore(0);
        setValue(1);
      }
      return (
        <div>
          <h2 className="win w-100">You Win!</h2>
          <Confetti />
          <Button
            className="m-3"
            variant="success"
            onClick={resetGame}
            type="submit"
            value="Play again?"
          >
            Play Again?
          </Button>
        </div>
      );
}

export default GameOver