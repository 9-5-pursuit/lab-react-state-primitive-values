import React from "react";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.min.css";


const StartGame = ({ score, setScore, value, setValue }) => {
    function incrementScore() {
        setScore((prevState) => prevState + value);
    }
    function payTenPoints() {
        if (score < 10) {
          alert("You can't afford that!");
        } else {
          setScore(score - 10);
          setValue(value + 1);
        }
      }
  return (
    <Row className="d-grid gap-3 shadow-lg w-" style={{ width: '500px', height: '250px' }}>
      <Col className="mx-1">
        <h1 className="score">Current Score: {score}</h1>
      </Col>
      <Col className="plusOne">
        <Button variant="primary" onClick={incrementScore}>
          +{value}
        </Button>
      </Col>
      <Col className="plusMore">
        <Button variant="warning" className="bigBtn" onClick={payTenPoints}>
          Pay 10 points to change from +{value} to +{value + 1}
        </Button>
      </Col>
    </Row>
  )
}

export default StartGame