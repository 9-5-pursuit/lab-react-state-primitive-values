import React, { useState } from "react";
import StartGame from "./Components/StartGame";
import GameOver from "./Components/GameOver";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import "./App.css";

function App () {
  const [score, setScore] = useState(0);
  const [value, setValue] = useState(1);
    return (
      <Container className="d-flex justify-content-center align-items-center vh-100">
      {score < 100 ? (
        <StartGame
          score={score}
          value={value}
          setScore={setScore}
          setValue={setValue}
        />
      ) : (
        <GameOver setScore={setScore} setValue={setValue} />
      )}
    </Container>
    );
}

export default App;
